# neo4j-graphql-where-bug

# How to run dev mode

1. Create a `.env` file with the following contents
    ```
    ENVIRONMENT=local
    NEO4J_URL=****
    NEO4J_USER=****
    NEO4J_PASS=****
    ```
    All variables can be found under this project's Settings -> Secrets and variables -> Actions -> "Variables" tab
2. Be on Node 20
3. Run `npm install`
4. Run `npm run dev`

    a. (optionak) Run `npm run dev:debug` to get Cypher output

# Reproducing the error

1. Go to `localhost:4000/graphql`
2. Run the following mutation:
    ```gql
    mutation UpdateFileCategory($fileId: ID!, $newCategoryId: ID) {
      updateFiles(
        where: { id: $fileId }
        disconnect: {
          category: { where: { node: { NOT: { id: $newCategoryId } } } }
        }
        connect: { category: { where: { node: { id: $newCategoryId } } } }
      ) {
        info {
          relationshipsDeleted
          relationshipsCreated
        }
      }
    }
    // Variables
    {
        "fileId": "file-1",
        "newCategoryId": "category-image"
    }
    ```
3. The response should return an error `"Invalid input 'WHERE': expected 'FOREACH', 'CALL' ..."`

The corresponding Cypher output:
```cypher
MATCH (this:File)
CALL {
    WITH this
    MATCH (this)<-[:HAS_FILE]-(this0:Folder)
    CALL {
        WITH this0
        MATCH (this0)<-[:HAS_CABINET]-(this1:Cabinet)
        OPTIONAL MATCH (this1)<-[:HAS_CABINET]-(this2:User)
        WITH *, count(this2) AS userCount
        WITH *
        WHERE (userCount <> 0 AND ($jwt.sub IS NOT NULL AND this2.id = $jwt.sub))
        RETURN count(this1) = 1 AS var3
    }
    WITH *
    WHERE var3 = true
    RETURN count(this0) = 1 AS var4
}
WITH *
WHERE (this.id = $param1 AND ($isAuthenticated = true AND var4 = true))
WITH this
CALL {
WITH this
OPTIONAL MATCH (this)<-[this_disconnect_category0_rel:HAS_FILE]-(this_disconnect_category0:Category)
CALL {
    WITH this
    MATCH (this)<-[:HAS_FILE]-(authorization__before_this2:Folder)
    CALL {
        WITH authorization__before_this2
        MATCH (authorization__before_this2)<-[:HAS_CABINET]-(authorization__before_this3:Cabinet)
        OPTIONAL MATCH (authorization__before_this3)<-[:HAS_CABINET]-(authorization__before_this4:User)
        WITH *, count(authorization__before_this4) AS userCount
        WITH *
        WHERE (userCount <> 0 AND ($jwt.sub IS NOT NULL AND authorization__before_this4.id = $jwt.sub))
        RETURN count(authorization__before_this3) = 1 AS authorization__before_var5
    }
    WITH *
    WHERE authorization__before_var5 = true
    RETURN count(authorization__before_this2) = 1 AS authorization__before_var0
}
CALL {
    WITH this_disconnect_category0
    MATCH (this_disconnect_category0)<-[:HAS_CATEGORY]-(authorization__before_this6:Cabinet)
    OPTIONAL MATCH (authorization__before_this6)<-[:HAS_CABINET]-(authorization__before_this7:User)
    WITH *, count(authorization__before_this7) AS userCount
    WITH *
    WHERE (userCount <> 0 AND ($jwt.sub IS NOT NULL AND authorization__before_this7.id = $jwt.sub))
    RETURN count(authorization__before_this6) = 1 AS authorization__before_var1
}
WHERE NOT (this_disconnect_category0.id = $updateFiles_args_disconnect_category_where_Category_this_disconnect_category0param0) AND (($isAuthenticated = true AND authorization__before_var0 = true) AND ($isAuthenticated = true AND authorization__before_var1 = true))
CALL {
	WITH this_disconnect_category0, this_disconnect_category0_rel, this
	WITH collect(this_disconnect_category0) as this_disconnect_category0, this_disconnect_category0_rel, this
	UNWIND this_disconnect_category0 as x
	DELETE this_disconnect_category0_rel
}
RETURN count(*) AS disconnect_this_disconnect_category_Category
}
WITH *
CALL {
	WITH this
	OPTIONAL MATCH (this_connect_category0_node:Category)
CALL {
    WITH this_connect_category0_node
    MATCH (this_connect_category0_node)<-[:HAS_CATEGORY]-(authorization__before_this2:Cabinet)
    OPTIONAL MATCH (authorization__before_this2)<-[:HAS_CABINET]-(authorization__before_this3:User)
    WITH *, count(authorization__before_this3) AS userCount
    WITH *
    WHERE (userCount <> 0 AND ($jwt.sub IS NOT NULL AND authorization__before_this3.id = $jwt.sub))
    RETURN count(authorization__before_this2) = 1 AS authorization__before_var0
}
CALL {
    WITH this
    MATCH (this)<-[:HAS_FILE]-(authorization__before_this4:Folder)
    CALL {
        WITH authorization__before_this4
        MATCH (authorization__before_this4)<-[:HAS_CABINET]-(authorization__before_this5:Cabinet)
        OPTIONAL MATCH (authorization__before_this5)<-[:HAS_CABINET]-(authorization__before_this6:User)
        WITH *, count(authorization__before_this6) AS userCount
        WITH *
        WHERE (userCount <> 0 AND ($jwt.sub IS NOT NULL AND authorization__before_this6.id = $jwt.sub))
        RETURN count(authorization__before_this5) = 1 AS authorization__before_var7
    }
    WITH *
    WHERE authorization__before_var7 = true
    RETURN count(authorization__before_this4) = 1 AS authorization__before_var1
}
WITH *
	WHERE this_connect_category0_node.id = $this_connect_category0_node_param0 AND (($isAuthenticated = true AND authorization__before_var0 = true) AND ($isAuthenticated = true AND authorization__before_var1 = true))
	CALL {
		WITH *
		WITH collect(this_connect_category0_node) as connectedNodes, collect(this) as parentNodes
		CALL {
			WITH connectedNodes, parentNodes
			UNWIND parentNodes as this
			UNWIND connectedNodes as this_connect_category0_node
			MERGE (this)<-[:HAS_FILE]-(this_connect_category0_node)
		}
	}
WITH this, this_connect_category0_node
	RETURN count(*) AS connect_this_connect_category_Category0
}
WITH *
WITH *
CALL {
	WITH this
	MATCH (this)<-[this_category_Category_unique:HAS_FILE]-(:Category)
	WITH count(this_category_Category_unique) as c
	WHERE apoc.util.validatePredicate(NOT (c <= 1), '@neo4j/graphql/RELATIONSHIP-REQUIREDFile.category must be less than or equal to one', [0])
	RETURN c AS this_category_Category_unique_ignored
}
CALL {
	WITH this
	MATCH (this)<-[this_folder_Folder_unique:HAS_FILE]-(:Folder)
	WITH count(this_folder_Folder_unique) as c
	WHERE apoc.util.validatePredicate(NOT (c = 1), '@neo4j/graphql/RELATIONSHIP-REQUIREDFile.folder required exactly once', [0])
	RETURN c AS this_folder_Folder_unique_ignored
}
RETURN "Query cannot conclude with CALL" +0ms
cypher params: {
  jwt: {
    iat: 1724442925,
    exp: 9724445955,
    sub: '4252a2b0-9492-4bef-8a94-fa20c97e7f71',
    tId: 'public',
    sessionHandle: 'a9021a8e-0d39-4639-8cb4-276e1724ba69',
    'st-ev': { v: true, t: 1724442925149 },
    'st-role': { v: [Array], t: 1724172602771 },
    'st-perm': { v: [], t: 1724172602871 }
  },
  param1: 'file-1',
  isAuthenticated: true,
  updateFiles_args_disconnect_category_where_Category_this_disconnect_category0param0: 'category-image',
  this_connect_category0_node_param0: 'category-image',
  updateFiles: { args: { disconnect: [Object] } },
  resolvedCallbacks: {}
}
```

This is what the schema looks like visually:

![](schema.png)