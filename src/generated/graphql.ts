import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cabinet = {
  __typename?: 'Cabinet';
  categories: Array<Category>;
  categoriesAggregate?: Maybe<CabinetCategoryCategoriesAggregationSelection>;
  categoriesConnection: CabinetCategoriesConnection;
  folders: Array<Folder>;
  foldersAggregate?: Maybe<CabinetFolderFoldersAggregationSelection>;
  foldersConnection: CabinetFoldersConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  user: User;
  userAggregate?: Maybe<CabinetUserUserAggregationSelection>;
  userConnection: CabinetUserConnection;
};


export type CabinetCategoriesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CategoryOptions>;
  where?: InputMaybe<CategoryWhere>;
};


export type CabinetCategoriesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CategoryWhere>;
};


export type CabinetCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CabinetCategoriesConnectionSort>>;
  where?: InputMaybe<CabinetCategoriesConnectionWhere>;
};


export type CabinetFoldersArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FolderOptions>;
  where?: InputMaybe<FolderWhere>;
};


export type CabinetFoldersAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FolderWhere>;
};


export type CabinetFoldersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CabinetFoldersConnectionSort>>;
  where?: InputMaybe<CabinetFoldersConnectionWhere>;
};


export type CabinetUserArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type CabinetUserAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<UserWhere>;
};


export type CabinetUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CabinetUserConnectionSort>>;
  where?: InputMaybe<CabinetUserConnectionWhere>;
};

export type CabinetAggregateSelection = {
  __typename?: 'CabinetAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CabinetCategoriesAggregateInput = {
  AND?: InputMaybe<Array<CabinetCategoriesAggregateInput>>;
  NOT?: InputMaybe<CabinetCategoriesAggregateInput>;
  OR?: InputMaybe<Array<CabinetCategoriesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CabinetCategoriesNodeAggregationWhereInput>;
};

export type CabinetCategoriesConnectFieldInput = {
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CategoryConnectWhere>;
};

export type CabinetCategoriesConnection = {
  __typename?: 'CabinetCategoriesConnection';
  edges: Array<CabinetCategoriesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CabinetCategoriesConnectionSort = {
  node?: InputMaybe<CategorySort>;
};

export type CabinetCategoriesConnectionWhere = {
  AND?: InputMaybe<Array<CabinetCategoriesConnectionWhere>>;
  NOT?: InputMaybe<CabinetCategoriesConnectionWhere>;
  OR?: InputMaybe<Array<CabinetCategoriesConnectionWhere>>;
  node?: InputMaybe<CategoryWhere>;
};

export type CabinetCategoriesCreateFieldInput = {
  node: CategoryCreateInput;
};

export type CabinetCategoriesDeleteFieldInput = {
  delete?: InputMaybe<CategoryDeleteInput>;
  where?: InputMaybe<CabinetCategoriesConnectionWhere>;
};

export type CabinetCategoriesDisconnectFieldInput = {
  disconnect?: InputMaybe<CategoryDisconnectInput>;
  where?: InputMaybe<CabinetCategoriesConnectionWhere>;
};

export type CabinetCategoriesFieldInput = {
  connect?: InputMaybe<Array<CabinetCategoriesConnectFieldInput>>;
  create?: InputMaybe<Array<CabinetCategoriesCreateFieldInput>>;
};

export type CabinetCategoriesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CabinetCategoriesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CabinetCategoriesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CabinetCategoriesNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CabinetCategoriesRelationship = {
  __typename?: 'CabinetCategoriesRelationship';
  cursor: Scalars['String']['output'];
  node: Category;
};

export type CabinetCategoriesUpdateConnectionInput = {
  node?: InputMaybe<CategoryUpdateInput>;
};

export type CabinetCategoriesUpdateFieldInput = {
  connect?: InputMaybe<Array<CabinetCategoriesConnectFieldInput>>;
  create?: InputMaybe<Array<CabinetCategoriesCreateFieldInput>>;
  delete?: InputMaybe<Array<CabinetCategoriesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CabinetCategoriesDisconnectFieldInput>>;
  update?: InputMaybe<CabinetCategoriesUpdateConnectionInput>;
  where?: InputMaybe<CabinetCategoriesConnectionWhere>;
};

export type CabinetCategoryCategoriesAggregationSelection = {
  __typename?: 'CabinetCategoryCategoriesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CabinetCategoryCategoriesNodeAggregateSelection>;
};

export type CabinetCategoryCategoriesNodeAggregateSelection = {
  __typename?: 'CabinetCategoryCategoriesNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CabinetConnectInput = {
  categories?: InputMaybe<Array<CabinetCategoriesConnectFieldInput>>;
  folders?: InputMaybe<Array<CabinetFoldersConnectFieldInput>>;
  user?: InputMaybe<CabinetUserConnectFieldInput>;
};

export type CabinetConnectWhere = {
  node: CabinetWhere;
};

export type CabinetCreateInput = {
  categories?: InputMaybe<CabinetCategoriesFieldInput>;
  folders?: InputMaybe<CabinetFoldersFieldInput>;
  name: Scalars['String']['input'];
  user?: InputMaybe<CabinetUserFieldInput>;
};

export type CabinetDeleteInput = {
  categories?: InputMaybe<Array<CabinetCategoriesDeleteFieldInput>>;
  folders?: InputMaybe<Array<CabinetFoldersDeleteFieldInput>>;
  user?: InputMaybe<CabinetUserDeleteFieldInput>;
};

export type CabinetDisconnectInput = {
  categories?: InputMaybe<Array<CabinetCategoriesDisconnectFieldInput>>;
  folders?: InputMaybe<Array<CabinetFoldersDisconnectFieldInput>>;
  user?: InputMaybe<CabinetUserDisconnectFieldInput>;
};

export type CabinetEdge = {
  __typename?: 'CabinetEdge';
  cursor: Scalars['String']['output'];
  node: Cabinet;
};

export type CabinetFolderFoldersAggregationSelection = {
  __typename?: 'CabinetFolderFoldersAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CabinetFolderFoldersNodeAggregateSelection>;
};

export type CabinetFolderFoldersNodeAggregateSelection = {
  __typename?: 'CabinetFolderFoldersNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CabinetFoldersAggregateInput = {
  AND?: InputMaybe<Array<CabinetFoldersAggregateInput>>;
  NOT?: InputMaybe<CabinetFoldersAggregateInput>;
  OR?: InputMaybe<Array<CabinetFoldersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CabinetFoldersNodeAggregationWhereInput>;
};

export type CabinetFoldersConnectFieldInput = {
  connect?: InputMaybe<Array<FolderConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FolderConnectWhere>;
};

export type CabinetFoldersConnection = {
  __typename?: 'CabinetFoldersConnection';
  edges: Array<CabinetFoldersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CabinetFoldersConnectionSort = {
  node?: InputMaybe<FolderSort>;
};

export type CabinetFoldersConnectionWhere = {
  AND?: InputMaybe<Array<CabinetFoldersConnectionWhere>>;
  NOT?: InputMaybe<CabinetFoldersConnectionWhere>;
  OR?: InputMaybe<Array<CabinetFoldersConnectionWhere>>;
  node?: InputMaybe<FolderWhere>;
};

export type CabinetFoldersCreateFieldInput = {
  node: FolderCreateInput;
};

export type CabinetFoldersDeleteFieldInput = {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<CabinetFoldersConnectionWhere>;
};

export type CabinetFoldersDisconnectFieldInput = {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<CabinetFoldersConnectionWhere>;
};

export type CabinetFoldersFieldInput = {
  connect?: InputMaybe<Array<CabinetFoldersConnectFieldInput>>;
  create?: InputMaybe<Array<CabinetFoldersCreateFieldInput>>;
};

export type CabinetFoldersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CabinetFoldersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CabinetFoldersNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CabinetFoldersNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CabinetFoldersRelationship = {
  __typename?: 'CabinetFoldersRelationship';
  cursor: Scalars['String']['output'];
  node: Folder;
};

export type CabinetFoldersUpdateConnectionInput = {
  node?: InputMaybe<FolderUpdateInput>;
};

export type CabinetFoldersUpdateFieldInput = {
  connect?: InputMaybe<Array<CabinetFoldersConnectFieldInput>>;
  create?: InputMaybe<Array<CabinetFoldersCreateFieldInput>>;
  delete?: InputMaybe<Array<CabinetFoldersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CabinetFoldersDisconnectFieldInput>>;
  update?: InputMaybe<CabinetFoldersUpdateConnectionInput>;
  where?: InputMaybe<CabinetFoldersConnectionWhere>;
};

export type CabinetOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CabinetSort objects to sort Cabinets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CabinetSort>>;
};

export type CabinetRelationInput = {
  categories?: InputMaybe<Array<CabinetCategoriesCreateFieldInput>>;
  folders?: InputMaybe<Array<CabinetFoldersCreateFieldInput>>;
  user?: InputMaybe<CabinetUserCreateFieldInput>;
};

/** Fields to sort Cabinets by. The order in which sorts are applied is not guaranteed when specifying many fields in one CabinetSort object. */
export type CabinetSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type CabinetUpdateInput = {
  categories?: InputMaybe<Array<CabinetCategoriesUpdateFieldInput>>;
  folders?: InputMaybe<Array<CabinetFoldersUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<CabinetUserUpdateFieldInput>;
};

export type CabinetUserAggregateInput = {
  AND?: InputMaybe<Array<CabinetUserAggregateInput>>;
  NOT?: InputMaybe<CabinetUserAggregateInput>;
  OR?: InputMaybe<Array<CabinetUserAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CabinetUserNodeAggregationWhereInput>;
};

export type CabinetUserConnectFieldInput = {
  connect?: InputMaybe<UserConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<UserConnectWhere>;
};

export type CabinetUserConnection = {
  __typename?: 'CabinetUserConnection';
  edges: Array<CabinetUserRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CabinetUserConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type CabinetUserConnectionWhere = {
  AND?: InputMaybe<Array<CabinetUserConnectionWhere>>;
  NOT?: InputMaybe<CabinetUserConnectionWhere>;
  OR?: InputMaybe<Array<CabinetUserConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
};

export type CabinetUserCreateFieldInput = {
  node: UserCreateInput;
};

export type CabinetUserDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<CabinetUserConnectionWhere>;
};

export type CabinetUserDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<CabinetUserConnectionWhere>;
};

export type CabinetUserFieldInput = {
  connect?: InputMaybe<CabinetUserConnectFieldInput>;
  create?: InputMaybe<CabinetUserCreateFieldInput>;
};

export type CabinetUserNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CabinetUserNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CabinetUserNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CabinetUserNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CabinetUserRelationship = {
  __typename?: 'CabinetUserRelationship';
  cursor: Scalars['String']['output'];
  node: User;
};

export type CabinetUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type CabinetUserUpdateFieldInput = {
  connect?: InputMaybe<CabinetUserConnectFieldInput>;
  create?: InputMaybe<CabinetUserCreateFieldInput>;
  delete?: InputMaybe<CabinetUserDeleteFieldInput>;
  disconnect?: InputMaybe<CabinetUserDisconnectFieldInput>;
  update?: InputMaybe<CabinetUserUpdateConnectionInput>;
  where?: InputMaybe<CabinetUserConnectionWhere>;
};

export type CabinetUserUserAggregationSelection = {
  __typename?: 'CabinetUserUserAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CabinetUserUserNodeAggregateSelection>;
};

export type CabinetUserUserNodeAggregateSelection = {
  __typename?: 'CabinetUserUserNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CabinetWhere = {
  AND?: InputMaybe<Array<CabinetWhere>>;
  NOT?: InputMaybe<CabinetWhere>;
  OR?: InputMaybe<Array<CabinetWhere>>;
  categoriesAggregate?: InputMaybe<CabinetCategoriesAggregateInput>;
  /** Return Cabinets where all of the related CabinetCategoriesConnections match this filter */
  categoriesConnection_ALL?: InputMaybe<CabinetCategoriesConnectionWhere>;
  /** Return Cabinets where none of the related CabinetCategoriesConnections match this filter */
  categoriesConnection_NONE?: InputMaybe<CabinetCategoriesConnectionWhere>;
  /** Return Cabinets where one of the related CabinetCategoriesConnections match this filter */
  categoriesConnection_SINGLE?: InputMaybe<CabinetCategoriesConnectionWhere>;
  /** Return Cabinets where some of the related CabinetCategoriesConnections match this filter */
  categoriesConnection_SOME?: InputMaybe<CabinetCategoriesConnectionWhere>;
  /** Return Cabinets where all of the related Categories match this filter */
  categories_ALL?: InputMaybe<CategoryWhere>;
  /** Return Cabinets where none of the related Categories match this filter */
  categories_NONE?: InputMaybe<CategoryWhere>;
  /** Return Cabinets where one of the related Categories match this filter */
  categories_SINGLE?: InputMaybe<CategoryWhere>;
  /** Return Cabinets where some of the related Categories match this filter */
  categories_SOME?: InputMaybe<CategoryWhere>;
  foldersAggregate?: InputMaybe<CabinetFoldersAggregateInput>;
  /** Return Cabinets where all of the related CabinetFoldersConnections match this filter */
  foldersConnection_ALL?: InputMaybe<CabinetFoldersConnectionWhere>;
  /** Return Cabinets where none of the related CabinetFoldersConnections match this filter */
  foldersConnection_NONE?: InputMaybe<CabinetFoldersConnectionWhere>;
  /** Return Cabinets where one of the related CabinetFoldersConnections match this filter */
  foldersConnection_SINGLE?: InputMaybe<CabinetFoldersConnectionWhere>;
  /** Return Cabinets where some of the related CabinetFoldersConnections match this filter */
  foldersConnection_SOME?: InputMaybe<CabinetFoldersConnectionWhere>;
  /** Return Cabinets where all of the related Folders match this filter */
  folders_ALL?: InputMaybe<FolderWhere>;
  /** Return Cabinets where none of the related Folders match this filter */
  folders_NONE?: InputMaybe<FolderWhere>;
  /** Return Cabinets where one of the related Folders match this filter */
  folders_SINGLE?: InputMaybe<FolderWhere>;
  /** Return Cabinets where some of the related Folders match this filter */
  folders_SOME?: InputMaybe<FolderWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserWhere>;
  userAggregate?: InputMaybe<CabinetUserAggregateInput>;
  userConnection?: InputMaybe<CabinetUserConnectionWhere>;
  userConnection_NOT?: InputMaybe<CabinetUserConnectionWhere>;
  user_NOT?: InputMaybe<UserWhere>;
};

export type CabinetsConnection = {
  __typename?: 'CabinetsConnection';
  edges: Array<CabinetEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CategoriesConnection = {
  __typename?: 'CategoriesConnection';
  edges: Array<CategoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Category = {
  __typename?: 'Category';
  cabinet: Cabinet;
  cabinetAggregate?: Maybe<CategoryCabinetCabinetAggregationSelection>;
  cabinetConnection: CategoryCabinetConnection;
  files: Array<File>;
  filesAggregate?: Maybe<CategoryFileFilesAggregationSelection>;
  filesConnection: CategoryFilesConnection;
  folder: Array<Folder>;
  folderAggregate?: Maybe<CategoryFolderFolderAggregationSelection>;
  folderConnection: CategoryFolderConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type CategoryCabinetArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CabinetOptions>;
  where?: InputMaybe<CabinetWhere>;
};


export type CategoryCabinetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CabinetWhere>;
};


export type CategoryCabinetConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CategoryCabinetConnectionSort>>;
  where?: InputMaybe<CategoryCabinetConnectionWhere>;
};


export type CategoryFilesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FileOptions>;
  where?: InputMaybe<FileWhere>;
};


export type CategoryFilesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FileWhere>;
};


export type CategoryFilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CategoryFilesConnectionSort>>;
  where?: InputMaybe<CategoryFilesConnectionWhere>;
};


export type CategoryFolderArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FolderOptions>;
  where?: InputMaybe<FolderWhere>;
};


export type CategoryFolderAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FolderWhere>;
};


export type CategoryFolderConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CategoryFolderConnectionSort>>;
  where?: InputMaybe<CategoryFolderConnectionWhere>;
};

export type CategoryAggregateSelection = {
  __typename?: 'CategoryAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CategoryCabinetAggregateInput = {
  AND?: InputMaybe<Array<CategoryCabinetAggregateInput>>;
  NOT?: InputMaybe<CategoryCabinetAggregateInput>;
  OR?: InputMaybe<Array<CategoryCabinetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CategoryCabinetNodeAggregationWhereInput>;
};

export type CategoryCabinetCabinetAggregationSelection = {
  __typename?: 'CategoryCabinetCabinetAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CategoryCabinetCabinetNodeAggregateSelection>;
};

export type CategoryCabinetCabinetNodeAggregateSelection = {
  __typename?: 'CategoryCabinetCabinetNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CategoryCabinetConnectFieldInput = {
  connect?: InputMaybe<CabinetConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CabinetConnectWhere>;
};

export type CategoryCabinetConnection = {
  __typename?: 'CategoryCabinetConnection';
  edges: Array<CategoryCabinetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CategoryCabinetConnectionSort = {
  node?: InputMaybe<CabinetSort>;
};

export type CategoryCabinetConnectionWhere = {
  AND?: InputMaybe<Array<CategoryCabinetConnectionWhere>>;
  NOT?: InputMaybe<CategoryCabinetConnectionWhere>;
  OR?: InputMaybe<Array<CategoryCabinetConnectionWhere>>;
  node?: InputMaybe<CabinetWhere>;
};

export type CategoryCabinetCreateFieldInput = {
  node: CabinetCreateInput;
};

export type CategoryCabinetDeleteFieldInput = {
  delete?: InputMaybe<CabinetDeleteInput>;
  where?: InputMaybe<CategoryCabinetConnectionWhere>;
};

export type CategoryCabinetDisconnectFieldInput = {
  disconnect?: InputMaybe<CabinetDisconnectInput>;
  where?: InputMaybe<CategoryCabinetConnectionWhere>;
};

export type CategoryCabinetFieldInput = {
  connect?: InputMaybe<CategoryCabinetConnectFieldInput>;
  create?: InputMaybe<CategoryCabinetCreateFieldInput>;
};

export type CategoryCabinetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CategoryCabinetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CategoryCabinetNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CategoryCabinetNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryCabinetRelationship = {
  __typename?: 'CategoryCabinetRelationship';
  cursor: Scalars['String']['output'];
  node: Cabinet;
};

export type CategoryCabinetUpdateConnectionInput = {
  node?: InputMaybe<CabinetUpdateInput>;
};

export type CategoryCabinetUpdateFieldInput = {
  connect?: InputMaybe<CategoryCabinetConnectFieldInput>;
  create?: InputMaybe<CategoryCabinetCreateFieldInput>;
  delete?: InputMaybe<CategoryCabinetDeleteFieldInput>;
  disconnect?: InputMaybe<CategoryCabinetDisconnectFieldInput>;
  update?: InputMaybe<CategoryCabinetUpdateConnectionInput>;
  where?: InputMaybe<CategoryCabinetConnectionWhere>;
};

export type CategoryConnectInput = {
  cabinet?: InputMaybe<CategoryCabinetConnectFieldInput>;
  files?: InputMaybe<Array<CategoryFilesConnectFieldInput>>;
  folder?: InputMaybe<Array<CategoryFolderConnectFieldInput>>;
};

export type CategoryConnectOrCreateInput = {
  files?: InputMaybe<Array<CategoryFilesConnectOrCreateFieldInput>>;
};

export type CategoryConnectWhere = {
  node: CategoryWhere;
};

export type CategoryCreateInput = {
  cabinet?: InputMaybe<CategoryCabinetFieldInput>;
  files?: InputMaybe<CategoryFilesFieldInput>;
  folder?: InputMaybe<CategoryFolderFieldInput>;
  name: Scalars['String']['input'];
};

export type CategoryDeleteInput = {
  cabinet?: InputMaybe<CategoryCabinetDeleteFieldInput>;
  files?: InputMaybe<Array<CategoryFilesDeleteFieldInput>>;
  folder?: InputMaybe<Array<CategoryFolderDeleteFieldInput>>;
};

export type CategoryDisconnectInput = {
  cabinet?: InputMaybe<CategoryCabinetDisconnectFieldInput>;
  files?: InputMaybe<Array<CategoryFilesDisconnectFieldInput>>;
  folder?: InputMaybe<Array<CategoryFolderDisconnectFieldInput>>;
};

export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  cursor: Scalars['String']['output'];
  node: Category;
};

export type CategoryFileFilesAggregationSelection = {
  __typename?: 'CategoryFileFilesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CategoryFileFilesNodeAggregateSelection>;
};

export type CategoryFileFilesNodeAggregateSelection = {
  __typename?: 'CategoryFileFilesNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CategoryFilesAggregateInput = {
  AND?: InputMaybe<Array<CategoryFilesAggregateInput>>;
  NOT?: InputMaybe<CategoryFilesAggregateInput>;
  OR?: InputMaybe<Array<CategoryFilesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CategoryFilesNodeAggregationWhereInput>;
};

export type CategoryFilesConnectFieldInput = {
  connect?: InputMaybe<Array<FileConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FileConnectWhere>;
};

export type CategoryFilesConnectOrCreateFieldInput = {
  onCreate: CategoryFilesConnectOrCreateFieldInputOnCreate;
  where: FileConnectOrCreateWhere;
};

export type CategoryFilesConnectOrCreateFieldInputOnCreate = {
  node: FileOnCreateInput;
};

export type CategoryFilesConnection = {
  __typename?: 'CategoryFilesConnection';
  edges: Array<CategoryFilesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CategoryFilesConnectionSort = {
  node?: InputMaybe<FileSort>;
};

export type CategoryFilesConnectionWhere = {
  AND?: InputMaybe<Array<CategoryFilesConnectionWhere>>;
  NOT?: InputMaybe<CategoryFilesConnectionWhere>;
  OR?: InputMaybe<Array<CategoryFilesConnectionWhere>>;
  node?: InputMaybe<FileWhere>;
};

export type CategoryFilesCreateFieldInput = {
  node: FileCreateInput;
};

export type CategoryFilesDeleteFieldInput = {
  delete?: InputMaybe<FileDeleteInput>;
  where?: InputMaybe<CategoryFilesConnectionWhere>;
};

export type CategoryFilesDisconnectFieldInput = {
  disconnect?: InputMaybe<FileDisconnectInput>;
  where?: InputMaybe<CategoryFilesConnectionWhere>;
};

export type CategoryFilesFieldInput = {
  connect?: InputMaybe<Array<CategoryFilesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryFilesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CategoryFilesCreateFieldInput>>;
};

export type CategoryFilesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CategoryFilesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CategoryFilesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CategoryFilesNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryFilesRelationship = {
  __typename?: 'CategoryFilesRelationship';
  cursor: Scalars['String']['output'];
  node: File;
};

export type CategoryFilesUpdateConnectionInput = {
  node?: InputMaybe<FileUpdateInput>;
};

export type CategoryFilesUpdateFieldInput = {
  connect?: InputMaybe<Array<CategoryFilesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryFilesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CategoryFilesCreateFieldInput>>;
  delete?: InputMaybe<Array<CategoryFilesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CategoryFilesDisconnectFieldInput>>;
  update?: InputMaybe<CategoryFilesUpdateConnectionInput>;
  where?: InputMaybe<CategoryFilesConnectionWhere>;
};

export type CategoryFolderAggregateInput = {
  AND?: InputMaybe<Array<CategoryFolderAggregateInput>>;
  NOT?: InputMaybe<CategoryFolderAggregateInput>;
  OR?: InputMaybe<Array<CategoryFolderAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ColorTypeAggregationWhereInput>;
  node?: InputMaybe<CategoryFolderNodeAggregationWhereInput>;
};

export type CategoryFolderConnectFieldInput = {
  connect?: InputMaybe<Array<FolderConnectInput>>;
  edge?: InputMaybe<ColorTypeCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FolderConnectWhere>;
};

export type CategoryFolderConnection = {
  __typename?: 'CategoryFolderConnection';
  edges: Array<CategoryFolderRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CategoryFolderConnectionSort = {
  edge?: InputMaybe<ColorTypeSort>;
  node?: InputMaybe<FolderSort>;
};

export type CategoryFolderConnectionWhere = {
  AND?: InputMaybe<Array<CategoryFolderConnectionWhere>>;
  NOT?: InputMaybe<CategoryFolderConnectionWhere>;
  OR?: InputMaybe<Array<CategoryFolderConnectionWhere>>;
  edge?: InputMaybe<ColorTypeWhere>;
  node?: InputMaybe<FolderWhere>;
};

export type CategoryFolderCreateFieldInput = {
  edge?: InputMaybe<ColorTypeCreateInput>;
  node: FolderCreateInput;
};

export type CategoryFolderDeleteFieldInput = {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<CategoryFolderConnectionWhere>;
};

export type CategoryFolderDisconnectFieldInput = {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<CategoryFolderConnectionWhere>;
};

export type CategoryFolderFieldInput = {
  connect?: InputMaybe<Array<CategoryFolderConnectFieldInput>>;
  create?: InputMaybe<Array<CategoryFolderCreateFieldInput>>;
};

export type CategoryFolderFolderAggregationSelection = {
  __typename?: 'CategoryFolderFolderAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<CategoryFolderFolderEdgeAggregateSelection>;
  node?: Maybe<CategoryFolderFolderNodeAggregateSelection>;
};

export type CategoryFolderFolderEdgeAggregateSelection = {
  __typename?: 'CategoryFolderFolderEdgeAggregateSelection';
  color: StringAggregateSelection;
};

export type CategoryFolderFolderNodeAggregateSelection = {
  __typename?: 'CategoryFolderFolderNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CategoryFolderNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CategoryFolderNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CategoryFolderNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CategoryFolderNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CategoryFolderRelationship = {
  __typename?: 'CategoryFolderRelationship';
  cursor: Scalars['String']['output'];
  node: Folder;
  properties: ColorType;
};

export type CategoryFolderUpdateConnectionInput = {
  edge?: InputMaybe<ColorTypeUpdateInput>;
  node?: InputMaybe<FolderUpdateInput>;
};

export type CategoryFolderUpdateFieldInput = {
  connect?: InputMaybe<Array<CategoryFolderConnectFieldInput>>;
  create?: InputMaybe<Array<CategoryFolderCreateFieldInput>>;
  delete?: InputMaybe<Array<CategoryFolderDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CategoryFolderDisconnectFieldInput>>;
  update?: InputMaybe<CategoryFolderUpdateConnectionInput>;
  where?: InputMaybe<CategoryFolderConnectionWhere>;
};

export type CategoryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CategorySort objects to sort Categories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CategorySort>>;
};

export type CategoryRelationInput = {
  cabinet?: InputMaybe<CategoryCabinetCreateFieldInput>;
  files?: InputMaybe<Array<CategoryFilesCreateFieldInput>>;
  folder?: InputMaybe<Array<CategoryFolderCreateFieldInput>>;
};

/** Fields to sort Categories by. The order in which sorts are applied is not guaranteed when specifying many fields in one CategorySort object. */
export type CategorySort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type CategoryUpdateInput = {
  cabinet?: InputMaybe<CategoryCabinetUpdateFieldInput>;
  files?: InputMaybe<Array<CategoryFilesUpdateFieldInput>>;
  folder?: InputMaybe<Array<CategoryFolderUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryWhere = {
  AND?: InputMaybe<Array<CategoryWhere>>;
  NOT?: InputMaybe<CategoryWhere>;
  OR?: InputMaybe<Array<CategoryWhere>>;
  cabinet?: InputMaybe<CabinetWhere>;
  cabinetAggregate?: InputMaybe<CategoryCabinetAggregateInput>;
  cabinetConnection?: InputMaybe<CategoryCabinetConnectionWhere>;
  cabinetConnection_NOT?: InputMaybe<CategoryCabinetConnectionWhere>;
  cabinet_NOT?: InputMaybe<CabinetWhere>;
  filesAggregate?: InputMaybe<CategoryFilesAggregateInput>;
  /** Return Categories where all of the related CategoryFilesConnections match this filter */
  filesConnection_ALL?: InputMaybe<CategoryFilesConnectionWhere>;
  /** Return Categories where none of the related CategoryFilesConnections match this filter */
  filesConnection_NONE?: InputMaybe<CategoryFilesConnectionWhere>;
  /** Return Categories where one of the related CategoryFilesConnections match this filter */
  filesConnection_SINGLE?: InputMaybe<CategoryFilesConnectionWhere>;
  /** Return Categories where some of the related CategoryFilesConnections match this filter */
  filesConnection_SOME?: InputMaybe<CategoryFilesConnectionWhere>;
  /** Return Categories where all of the related Files match this filter */
  files_ALL?: InputMaybe<FileWhere>;
  /** Return Categories where none of the related Files match this filter */
  files_NONE?: InputMaybe<FileWhere>;
  /** Return Categories where one of the related Files match this filter */
  files_SINGLE?: InputMaybe<FileWhere>;
  /** Return Categories where some of the related Files match this filter */
  files_SOME?: InputMaybe<FileWhere>;
  folderAggregate?: InputMaybe<CategoryFolderAggregateInput>;
  /** Return Categories where all of the related CategoryFolderConnections match this filter */
  folderConnection_ALL?: InputMaybe<CategoryFolderConnectionWhere>;
  /** Return Categories where none of the related CategoryFolderConnections match this filter */
  folderConnection_NONE?: InputMaybe<CategoryFolderConnectionWhere>;
  /** Return Categories where one of the related CategoryFolderConnections match this filter */
  folderConnection_SINGLE?: InputMaybe<CategoryFolderConnectionWhere>;
  /** Return Categories where some of the related CategoryFolderConnections match this filter */
  folderConnection_SOME?: InputMaybe<CategoryFolderConnectionWhere>;
  /** Return Categories where all of the related Folders match this filter */
  folder_ALL?: InputMaybe<FolderWhere>;
  /** Return Categories where none of the related Folders match this filter */
  folder_NONE?: InputMaybe<FolderWhere>;
  /** Return Categories where one of the related Folders match this filter */
  folder_SINGLE?: InputMaybe<FolderWhere>;
  /** Return Categories where some of the related Folders match this filter */
  folder_SOME?: InputMaybe<FolderWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

/**
 * The edge properties for the following fields:
 * * Category.folder
 * * Folder.categories
 */
export type ColorType = {
  __typename?: 'ColorType';
  color?: Maybe<Scalars['String']['output']>;
};

export type ColorTypeAggregationWhereInput = {
  AND?: InputMaybe<Array<ColorTypeAggregationWhereInput>>;
  NOT?: InputMaybe<ColorTypeAggregationWhereInput>;
  OR?: InputMaybe<Array<ColorTypeAggregationWhereInput>>;
  color_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  color_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  color_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  color_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  color_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  color_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  color_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  color_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  color_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  color_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  color_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  color_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  color_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  color_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  color_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ColorTypeCreateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
};

export type ColorTypeSort = {
  color?: InputMaybe<SortDirection>;
};

export type ColorTypeUpdateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
};

export type ColorTypeWhere = {
  AND?: InputMaybe<Array<ColorTypeWhere>>;
  NOT?: InputMaybe<ColorTypeWhere>;
  OR?: InputMaybe<Array<ColorTypeWhere>>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  color_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  color_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCabinetsMutationResponse = {
  __typename?: 'CreateCabinetsMutationResponse';
  cabinets: Array<Cabinet>;
  info: CreateInfo;
};

export type CreateCategoriesMutationResponse = {
  __typename?: 'CreateCategoriesMutationResponse';
  categories: Array<Category>;
  info: CreateInfo;
};

export type CreateFilesMutationResponse = {
  __typename?: 'CreateFilesMutationResponse';
  files: Array<File>;
  info: CreateInfo;
};

export type CreateFoldersMutationResponse = {
  __typename?: 'CreateFoldersMutationResponse';
  folders: Array<Folder>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateUsMutationResponse = {
  __typename?: 'CreateUsMutationResponse';
  info: CreateInfo;
  us: Array<Me>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type File = {
  __typename?: 'File';
  category?: Maybe<Category>;
  categoryAggregate?: Maybe<FileCategoryCategoryAggregationSelection>;
  categoryConnection: FileCategoryConnection;
  folder: Folder;
  folderAggregate?: Maybe<FileFolderFolderAggregationSelection>;
  folderConnection: FileFolderConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type FileCategoryArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CategoryOptions>;
  where?: InputMaybe<CategoryWhere>;
};


export type FileCategoryAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CategoryWhere>;
};


export type FileCategoryConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileCategoryConnectionSort>>;
  where?: InputMaybe<FileCategoryConnectionWhere>;
};


export type FileFolderArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FolderOptions>;
  where?: InputMaybe<FolderWhere>;
};


export type FileFolderAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FolderWhere>;
};


export type FileFolderConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FileFolderConnectionSort>>;
  where?: InputMaybe<FileFolderConnectionWhere>;
};

export type FileAggregateSelection = {
  __typename?: 'FileAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FileCategoryAggregateInput = {
  AND?: InputMaybe<Array<FileCategoryAggregateInput>>;
  NOT?: InputMaybe<FileCategoryAggregateInput>;
  OR?: InputMaybe<Array<FileCategoryAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FileCategoryNodeAggregationWhereInput>;
};

export type FileCategoryCategoryAggregationSelection = {
  __typename?: 'FileCategoryCategoryAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FileCategoryCategoryNodeAggregateSelection>;
};

export type FileCategoryCategoryNodeAggregateSelection = {
  __typename?: 'FileCategoryCategoryNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FileCategoryConnectFieldInput = {
  connect?: InputMaybe<CategoryConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CategoryConnectWhere>;
};

export type FileCategoryConnection = {
  __typename?: 'FileCategoryConnection';
  edges: Array<FileCategoryRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FileCategoryConnectionSort = {
  node?: InputMaybe<CategorySort>;
};

export type FileCategoryConnectionWhere = {
  AND?: InputMaybe<Array<FileCategoryConnectionWhere>>;
  NOT?: InputMaybe<FileCategoryConnectionWhere>;
  OR?: InputMaybe<Array<FileCategoryConnectionWhere>>;
  node?: InputMaybe<CategoryWhere>;
};

export type FileCategoryCreateFieldInput = {
  node: CategoryCreateInput;
};

export type FileCategoryDeleteFieldInput = {
  delete?: InputMaybe<CategoryDeleteInput>;
  where?: InputMaybe<FileCategoryConnectionWhere>;
};

export type FileCategoryDisconnectFieldInput = {
  disconnect?: InputMaybe<CategoryDisconnectInput>;
  where?: InputMaybe<FileCategoryConnectionWhere>;
};

export type FileCategoryFieldInput = {
  connect?: InputMaybe<FileCategoryConnectFieldInput>;
  create?: InputMaybe<FileCategoryCreateFieldInput>;
};

export type FileCategoryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FileCategoryNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FileCategoryNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FileCategoryNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FileCategoryRelationship = {
  __typename?: 'FileCategoryRelationship';
  cursor: Scalars['String']['output'];
  node: Category;
};

export type FileCategoryUpdateConnectionInput = {
  node?: InputMaybe<CategoryUpdateInput>;
};

export type FileCategoryUpdateFieldInput = {
  connect?: InputMaybe<FileCategoryConnectFieldInput>;
  create?: InputMaybe<FileCategoryCreateFieldInput>;
  delete?: InputMaybe<FileCategoryDeleteFieldInput>;
  disconnect?: InputMaybe<FileCategoryDisconnectFieldInput>;
  update?: InputMaybe<FileCategoryUpdateConnectionInput>;
  where?: InputMaybe<FileCategoryConnectionWhere>;
};

export type FileConnectInput = {
  category?: InputMaybe<FileCategoryConnectFieldInput>;
  folder?: InputMaybe<FileFolderConnectFieldInput>;
};

export type FileConnectOrCreateWhere = {
  node: FileUniqueWhere;
};

export type FileConnectWhere = {
  node: FileWhere;
};

export type FileCreateInput = {
  category?: InputMaybe<FileCategoryFieldInput>;
  folder?: InputMaybe<FileFolderFieldInput>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type FileDeleteInput = {
  category?: InputMaybe<FileCategoryDeleteFieldInput>;
  folder?: InputMaybe<FileFolderDeleteFieldInput>;
};

export type FileDisconnectInput = {
  category?: InputMaybe<FileCategoryDisconnectFieldInput>;
  folder?: InputMaybe<FileFolderDisconnectFieldInput>;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  cursor: Scalars['String']['output'];
  node: File;
};

export type FileFolderAggregateInput = {
  AND?: InputMaybe<Array<FileFolderAggregateInput>>;
  NOT?: InputMaybe<FileFolderAggregateInput>;
  OR?: InputMaybe<Array<FileFolderAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FileFolderNodeAggregationWhereInput>;
};

export type FileFolderConnectFieldInput = {
  connect?: InputMaybe<FolderConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FolderConnectWhere>;
};

export type FileFolderConnection = {
  __typename?: 'FileFolderConnection';
  edges: Array<FileFolderRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FileFolderConnectionSort = {
  node?: InputMaybe<FolderSort>;
};

export type FileFolderConnectionWhere = {
  AND?: InputMaybe<Array<FileFolderConnectionWhere>>;
  NOT?: InputMaybe<FileFolderConnectionWhere>;
  OR?: InputMaybe<Array<FileFolderConnectionWhere>>;
  node?: InputMaybe<FolderWhere>;
};

export type FileFolderCreateFieldInput = {
  node: FolderCreateInput;
};

export type FileFolderDeleteFieldInput = {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<FileFolderConnectionWhere>;
};

export type FileFolderDisconnectFieldInput = {
  disconnect?: InputMaybe<FolderDisconnectInput>;
  where?: InputMaybe<FileFolderConnectionWhere>;
};

export type FileFolderFieldInput = {
  connect?: InputMaybe<FileFolderConnectFieldInput>;
  create?: InputMaybe<FileFolderCreateFieldInput>;
};

export type FileFolderFolderAggregationSelection = {
  __typename?: 'FileFolderFolderAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FileFolderFolderNodeAggregateSelection>;
};

export type FileFolderFolderNodeAggregateSelection = {
  __typename?: 'FileFolderFolderNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FileFolderNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FileFolderNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FileFolderNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FileFolderNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FileFolderRelationship = {
  __typename?: 'FileFolderRelationship';
  cursor: Scalars['String']['output'];
  node: Folder;
};

export type FileFolderUpdateConnectionInput = {
  node?: InputMaybe<FolderUpdateInput>;
};

export type FileFolderUpdateFieldInput = {
  connect?: InputMaybe<FileFolderConnectFieldInput>;
  create?: InputMaybe<FileFolderCreateFieldInput>;
  delete?: InputMaybe<FileFolderDeleteFieldInput>;
  disconnect?: InputMaybe<FileFolderDisconnectFieldInput>;
  update?: InputMaybe<FileFolderUpdateConnectionInput>;
  where?: InputMaybe<FileFolderConnectionWhere>;
};

export type FileOnCreateInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type FileOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FileSort objects to sort Files by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FileSort>>;
};

export type FileRelationInput = {
  category?: InputMaybe<FileCategoryCreateFieldInput>;
  folder?: InputMaybe<FileFolderCreateFieldInput>;
};

/** Fields to sort Files by. The order in which sorts are applied is not guaranteed when specifying many fields in one FileSort object. */
export type FileSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type FileUniqueWhere = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type FileUpdateInput = {
  category?: InputMaybe<FileCategoryUpdateFieldInput>;
  folder?: InputMaybe<FileFolderUpdateFieldInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FileWhere = {
  AND?: InputMaybe<Array<FileWhere>>;
  NOT?: InputMaybe<FileWhere>;
  OR?: InputMaybe<Array<FileWhere>>;
  category?: InputMaybe<CategoryWhere>;
  categoryAggregate?: InputMaybe<FileCategoryAggregateInput>;
  categoryConnection?: InputMaybe<FileCategoryConnectionWhere>;
  categoryConnection_NOT?: InputMaybe<FileCategoryConnectionWhere>;
  category_NOT?: InputMaybe<CategoryWhere>;
  folder?: InputMaybe<FolderWhere>;
  folderAggregate?: InputMaybe<FileFolderAggregateInput>;
  folderConnection?: InputMaybe<FileFolderConnectionWhere>;
  folderConnection_NOT?: InputMaybe<FileFolderConnectionWhere>;
  folder_NOT?: InputMaybe<FolderWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type FilesConnection = {
  __typename?: 'FilesConnection';
  edges: Array<FileEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Folder = {
  __typename?: 'Folder';
  cabinet: Cabinet;
  cabinetAggregate?: Maybe<FolderCabinetCabinetAggregationSelection>;
  cabinetConnection: FolderCabinetConnection;
  categories: Array<Category>;
  categoriesAggregate?: Maybe<FolderCategoryCategoriesAggregationSelection>;
  categoriesConnection: FolderCategoriesConnection;
  files: Array<File>;
  filesAggregate?: Maybe<FolderFileFilesAggregationSelection>;
  filesConnection: FolderFilesConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type FolderCabinetArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CabinetOptions>;
  where?: InputMaybe<CabinetWhere>;
};


export type FolderCabinetAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CabinetWhere>;
};


export type FolderCabinetConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FolderCabinetConnectionSort>>;
  where?: InputMaybe<FolderCabinetConnectionWhere>;
};


export type FolderCategoriesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CategoryOptions>;
  where?: InputMaybe<CategoryWhere>;
};


export type FolderCategoriesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CategoryWhere>;
};


export type FolderCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FolderCategoriesConnectionSort>>;
  where?: InputMaybe<FolderCategoriesConnectionWhere>;
};


export type FolderFilesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<FileOptions>;
  where?: InputMaybe<FileWhere>;
};


export type FolderFilesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FileWhere>;
};


export type FolderFilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FolderFilesConnectionSort>>;
  where?: InputMaybe<FolderFilesConnectionWhere>;
};

export type FolderAggregateSelection = {
  __typename?: 'FolderAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FolderCabinetAggregateInput = {
  AND?: InputMaybe<Array<FolderCabinetAggregateInput>>;
  NOT?: InputMaybe<FolderCabinetAggregateInput>;
  OR?: InputMaybe<Array<FolderCabinetAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FolderCabinetNodeAggregationWhereInput>;
};

export type FolderCabinetCabinetAggregationSelection = {
  __typename?: 'FolderCabinetCabinetAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FolderCabinetCabinetNodeAggregateSelection>;
};

export type FolderCabinetCabinetNodeAggregateSelection = {
  __typename?: 'FolderCabinetCabinetNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FolderCabinetConnectFieldInput = {
  connect?: InputMaybe<CabinetConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CabinetConnectWhere>;
};

export type FolderCabinetConnection = {
  __typename?: 'FolderCabinetConnection';
  edges: Array<FolderCabinetRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FolderCabinetConnectionSort = {
  node?: InputMaybe<CabinetSort>;
};

export type FolderCabinetConnectionWhere = {
  AND?: InputMaybe<Array<FolderCabinetConnectionWhere>>;
  NOT?: InputMaybe<FolderCabinetConnectionWhere>;
  OR?: InputMaybe<Array<FolderCabinetConnectionWhere>>;
  node?: InputMaybe<CabinetWhere>;
};

export type FolderCabinetCreateFieldInput = {
  node: CabinetCreateInput;
};

export type FolderCabinetDeleteFieldInput = {
  delete?: InputMaybe<CabinetDeleteInput>;
  where?: InputMaybe<FolderCabinetConnectionWhere>;
};

export type FolderCabinetDisconnectFieldInput = {
  disconnect?: InputMaybe<CabinetDisconnectInput>;
  where?: InputMaybe<FolderCabinetConnectionWhere>;
};

export type FolderCabinetFieldInput = {
  connect?: InputMaybe<FolderCabinetConnectFieldInput>;
  create?: InputMaybe<FolderCabinetCreateFieldInput>;
};

export type FolderCabinetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FolderCabinetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FolderCabinetNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FolderCabinetNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FolderCabinetRelationship = {
  __typename?: 'FolderCabinetRelationship';
  cursor: Scalars['String']['output'];
  node: Cabinet;
};

export type FolderCabinetUpdateConnectionInput = {
  node?: InputMaybe<CabinetUpdateInput>;
};

export type FolderCabinetUpdateFieldInput = {
  connect?: InputMaybe<FolderCabinetConnectFieldInput>;
  create?: InputMaybe<FolderCabinetCreateFieldInput>;
  delete?: InputMaybe<FolderCabinetDeleteFieldInput>;
  disconnect?: InputMaybe<FolderCabinetDisconnectFieldInput>;
  update?: InputMaybe<FolderCabinetUpdateConnectionInput>;
  where?: InputMaybe<FolderCabinetConnectionWhere>;
};

export type FolderCategoriesAggregateInput = {
  AND?: InputMaybe<Array<FolderCategoriesAggregateInput>>;
  NOT?: InputMaybe<FolderCategoriesAggregateInput>;
  OR?: InputMaybe<Array<FolderCategoriesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  edge?: InputMaybe<ColorTypeAggregationWhereInput>;
  node?: InputMaybe<FolderCategoriesNodeAggregationWhereInput>;
};

export type FolderCategoriesConnectFieldInput = {
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  edge?: InputMaybe<ColorTypeCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CategoryConnectWhere>;
};

export type FolderCategoriesConnection = {
  __typename?: 'FolderCategoriesConnection';
  edges: Array<FolderCategoriesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FolderCategoriesConnectionSort = {
  edge?: InputMaybe<ColorTypeSort>;
  node?: InputMaybe<CategorySort>;
};

export type FolderCategoriesConnectionWhere = {
  AND?: InputMaybe<Array<FolderCategoriesConnectionWhere>>;
  NOT?: InputMaybe<FolderCategoriesConnectionWhere>;
  OR?: InputMaybe<Array<FolderCategoriesConnectionWhere>>;
  edge?: InputMaybe<ColorTypeWhere>;
  node?: InputMaybe<CategoryWhere>;
};

export type FolderCategoriesCreateFieldInput = {
  edge?: InputMaybe<ColorTypeCreateInput>;
  node: CategoryCreateInput;
};

export type FolderCategoriesDeleteFieldInput = {
  delete?: InputMaybe<CategoryDeleteInput>;
  where?: InputMaybe<FolderCategoriesConnectionWhere>;
};

export type FolderCategoriesDisconnectFieldInput = {
  disconnect?: InputMaybe<CategoryDisconnectInput>;
  where?: InputMaybe<FolderCategoriesConnectionWhere>;
};

export type FolderCategoriesFieldInput = {
  connect?: InputMaybe<Array<FolderCategoriesConnectFieldInput>>;
  create?: InputMaybe<Array<FolderCategoriesCreateFieldInput>>;
};

export type FolderCategoriesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FolderCategoriesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FolderCategoriesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FolderCategoriesNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FolderCategoriesRelationship = {
  __typename?: 'FolderCategoriesRelationship';
  cursor: Scalars['String']['output'];
  node: Category;
  properties: ColorType;
};

export type FolderCategoriesUpdateConnectionInput = {
  edge?: InputMaybe<ColorTypeUpdateInput>;
  node?: InputMaybe<CategoryUpdateInput>;
};

export type FolderCategoriesUpdateFieldInput = {
  connect?: InputMaybe<Array<FolderCategoriesConnectFieldInput>>;
  create?: InputMaybe<Array<FolderCategoriesCreateFieldInput>>;
  delete?: InputMaybe<Array<FolderCategoriesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FolderCategoriesDisconnectFieldInput>>;
  update?: InputMaybe<FolderCategoriesUpdateConnectionInput>;
  where?: InputMaybe<FolderCategoriesConnectionWhere>;
};

export type FolderCategoryCategoriesAggregationSelection = {
  __typename?: 'FolderCategoryCategoriesAggregationSelection';
  count: Scalars['Int']['output'];
  edge?: Maybe<FolderCategoryCategoriesEdgeAggregateSelection>;
  node?: Maybe<FolderCategoryCategoriesNodeAggregateSelection>;
};

export type FolderCategoryCategoriesEdgeAggregateSelection = {
  __typename?: 'FolderCategoryCategoriesEdgeAggregateSelection';
  color: StringAggregateSelection;
};

export type FolderCategoryCategoriesNodeAggregateSelection = {
  __typename?: 'FolderCategoryCategoriesNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FolderConnectInput = {
  cabinet?: InputMaybe<FolderCabinetConnectFieldInput>;
  categories?: InputMaybe<Array<FolderCategoriesConnectFieldInput>>;
  files?: InputMaybe<Array<FolderFilesConnectFieldInput>>;
};

export type FolderConnectOrCreateInput = {
  files?: InputMaybe<Array<FolderFilesConnectOrCreateFieldInput>>;
};

export type FolderConnectWhere = {
  node: FolderWhere;
};

export type FolderCreateInput = {
  cabinet?: InputMaybe<FolderCabinetFieldInput>;
  categories?: InputMaybe<FolderCategoriesFieldInput>;
  files?: InputMaybe<FolderFilesFieldInput>;
  name: Scalars['String']['input'];
};

export type FolderDeleteInput = {
  cabinet?: InputMaybe<FolderCabinetDeleteFieldInput>;
  categories?: InputMaybe<Array<FolderCategoriesDeleteFieldInput>>;
  files?: InputMaybe<Array<FolderFilesDeleteFieldInput>>;
};

export type FolderDisconnectInput = {
  cabinet?: InputMaybe<FolderCabinetDisconnectFieldInput>;
  categories?: InputMaybe<Array<FolderCategoriesDisconnectFieldInput>>;
  files?: InputMaybe<Array<FolderFilesDisconnectFieldInput>>;
};

export type FolderEdge = {
  __typename?: 'FolderEdge';
  cursor: Scalars['String']['output'];
  node: Folder;
};

export type FolderFileFilesAggregationSelection = {
  __typename?: 'FolderFileFilesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<FolderFileFilesNodeAggregateSelection>;
};

export type FolderFileFilesNodeAggregateSelection = {
  __typename?: 'FolderFileFilesNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FolderFilesAggregateInput = {
  AND?: InputMaybe<Array<FolderFilesAggregateInput>>;
  NOT?: InputMaybe<FolderFilesAggregateInput>;
  OR?: InputMaybe<Array<FolderFilesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<FolderFilesNodeAggregationWhereInput>;
};

export type FolderFilesConnectFieldInput = {
  connect?: InputMaybe<Array<FileConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<FileConnectWhere>;
};

export type FolderFilesConnectOrCreateFieldInput = {
  onCreate: FolderFilesConnectOrCreateFieldInputOnCreate;
  where: FileConnectOrCreateWhere;
};

export type FolderFilesConnectOrCreateFieldInputOnCreate = {
  node: FileOnCreateInput;
};

export type FolderFilesConnection = {
  __typename?: 'FolderFilesConnection';
  edges: Array<FolderFilesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FolderFilesConnectionSort = {
  node?: InputMaybe<FileSort>;
};

export type FolderFilesConnectionWhere = {
  AND?: InputMaybe<Array<FolderFilesConnectionWhere>>;
  NOT?: InputMaybe<FolderFilesConnectionWhere>;
  OR?: InputMaybe<Array<FolderFilesConnectionWhere>>;
  node?: InputMaybe<FileWhere>;
};

export type FolderFilesCreateFieldInput = {
  node: FileCreateInput;
};

export type FolderFilesDeleteFieldInput = {
  delete?: InputMaybe<FileDeleteInput>;
  where?: InputMaybe<FolderFilesConnectionWhere>;
};

export type FolderFilesDisconnectFieldInput = {
  disconnect?: InputMaybe<FileDisconnectInput>;
  where?: InputMaybe<FolderFilesConnectionWhere>;
};

export type FolderFilesFieldInput = {
  connect?: InputMaybe<Array<FolderFilesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FolderFilesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FolderFilesCreateFieldInput>>;
};

export type FolderFilesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FolderFilesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FolderFilesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<FolderFilesNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type FolderFilesRelationship = {
  __typename?: 'FolderFilesRelationship';
  cursor: Scalars['String']['output'];
  node: File;
};

export type FolderFilesUpdateConnectionInput = {
  node?: InputMaybe<FileUpdateInput>;
};

export type FolderFilesUpdateFieldInput = {
  connect?: InputMaybe<Array<FolderFilesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<FolderFilesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<FolderFilesCreateFieldInput>>;
  delete?: InputMaybe<Array<FolderFilesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FolderFilesDisconnectFieldInput>>;
  update?: InputMaybe<FolderFilesUpdateConnectionInput>;
  where?: InputMaybe<FolderFilesConnectionWhere>;
};

export type FolderOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more FolderSort objects to sort Folders by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FolderSort>>;
};

export type FolderRelationInput = {
  cabinet?: InputMaybe<FolderCabinetCreateFieldInput>;
  categories?: InputMaybe<Array<FolderCategoriesCreateFieldInput>>;
  files?: InputMaybe<Array<FolderFilesCreateFieldInput>>;
};

/** Fields to sort Folders by. The order in which sorts are applied is not guaranteed when specifying many fields in one FolderSort object. */
export type FolderSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type FolderUpdateInput = {
  cabinet?: InputMaybe<FolderCabinetUpdateFieldInput>;
  categories?: InputMaybe<Array<FolderCategoriesUpdateFieldInput>>;
  files?: InputMaybe<Array<FolderFilesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FolderWhere = {
  AND?: InputMaybe<Array<FolderWhere>>;
  NOT?: InputMaybe<FolderWhere>;
  OR?: InputMaybe<Array<FolderWhere>>;
  cabinet?: InputMaybe<CabinetWhere>;
  cabinetAggregate?: InputMaybe<FolderCabinetAggregateInput>;
  cabinetConnection?: InputMaybe<FolderCabinetConnectionWhere>;
  cabinetConnection_NOT?: InputMaybe<FolderCabinetConnectionWhere>;
  cabinet_NOT?: InputMaybe<CabinetWhere>;
  categoriesAggregate?: InputMaybe<FolderCategoriesAggregateInput>;
  /** Return Folders where all of the related FolderCategoriesConnections match this filter */
  categoriesConnection_ALL?: InputMaybe<FolderCategoriesConnectionWhere>;
  /** Return Folders where none of the related FolderCategoriesConnections match this filter */
  categoriesConnection_NONE?: InputMaybe<FolderCategoriesConnectionWhere>;
  /** Return Folders where one of the related FolderCategoriesConnections match this filter */
  categoriesConnection_SINGLE?: InputMaybe<FolderCategoriesConnectionWhere>;
  /** Return Folders where some of the related FolderCategoriesConnections match this filter */
  categoriesConnection_SOME?: InputMaybe<FolderCategoriesConnectionWhere>;
  /** Return Folders where all of the related Categories match this filter */
  categories_ALL?: InputMaybe<CategoryWhere>;
  /** Return Folders where none of the related Categories match this filter */
  categories_NONE?: InputMaybe<CategoryWhere>;
  /** Return Folders where one of the related Categories match this filter */
  categories_SINGLE?: InputMaybe<CategoryWhere>;
  /** Return Folders where some of the related Categories match this filter */
  categories_SOME?: InputMaybe<CategoryWhere>;
  filesAggregate?: InputMaybe<FolderFilesAggregateInput>;
  /** Return Folders where all of the related FolderFilesConnections match this filter */
  filesConnection_ALL?: InputMaybe<FolderFilesConnectionWhere>;
  /** Return Folders where none of the related FolderFilesConnections match this filter */
  filesConnection_NONE?: InputMaybe<FolderFilesConnectionWhere>;
  /** Return Folders where one of the related FolderFilesConnections match this filter */
  filesConnection_SINGLE?: InputMaybe<FolderFilesConnectionWhere>;
  /** Return Folders where some of the related FolderFilesConnections match this filter */
  filesConnection_SOME?: InputMaybe<FolderFilesConnectionWhere>;
  /** Return Folders where all of the related Files match this filter */
  files_ALL?: InputMaybe<FileWhere>;
  /** Return Folders where none of the related Files match this filter */
  files_NONE?: InputMaybe<FileWhere>;
  /** Return Folders where one of the related Files match this filter */
  files_SINGLE?: InputMaybe<FileWhere>;
  /** Return Folders where some of the related Files match this filter */
  files_SOME?: InputMaybe<FileWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type FoldersConnection = {
  __typename?: 'FoldersConnection';
  edges: Array<FolderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IdAggregateSelection = {
  __typename?: 'IDAggregateSelection';
  longest?: Maybe<Scalars['ID']['output']>;
  shortest?: Maybe<Scalars['ID']['output']>;
};

/** Test type that returns info about user */
export type Me = {
  __typename?: 'Me';
  myId: Scalars['ID']['output'];
  /** Test type that returns info about user's role */
  roles: Array<Scalars['String']['output']>;
};

export type MeAggregateSelection = {
  __typename?: 'MeAggregateSelection';
  count: Scalars['Int']['output'];
  myId: IdAggregateSelection;
};

export type MeCreateInput = {
  myId: Scalars['ID']['input'];
  roles: Array<Scalars['String']['input']>;
};

export type MeEdge = {
  __typename?: 'MeEdge';
  cursor: Scalars['String']['output'];
  node: Me;
};

export type MeOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MeSort objects to sort Us by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MeSort>>;
};

/** Fields to sort Us by. The order in which sorts are applied is not guaranteed when specifying many fields in one MeSort object. */
export type MeSort = {
  myId?: InputMaybe<SortDirection>;
};

export type MeUpdateInput = {
  myId?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  roles_POP?: InputMaybe<Scalars['Int']['input']>;
  roles_PUSH?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MeWhere = {
  AND?: InputMaybe<Array<MeWhere>>;
  NOT?: InputMaybe<MeWhere>;
  OR?: InputMaybe<Array<MeWhere>>;
  myId?: InputMaybe<Scalars['ID']['input']>;
  myId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  myId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  myId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  myId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
  roles_INCLUDES?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCabinets: CreateCabinetsMutationResponse;
  createCategories: CreateCategoriesMutationResponse;
  createFiles: CreateFilesMutationResponse;
  createFolders: CreateFoldersMutationResponse;
  createUs: CreateUsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteCabinets: DeleteInfo;
  deleteCategories: DeleteInfo;
  deleteFiles: DeleteInfo;
  deleteFolders: DeleteInfo;
  deleteUs: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateCabinets: UpdateCabinetsMutationResponse;
  updateCategories: UpdateCategoriesMutationResponse;
  updateFiles: UpdateFilesMutationResponse;
  updateFolders: UpdateFoldersMutationResponse;
  updateUs: UpdateUsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateCabinetsArgs = {
  input: Array<CabinetCreateInput>;
};


export type MutationCreateCategoriesArgs = {
  input: Array<CategoryCreateInput>;
};


export type MutationCreateFilesArgs = {
  input: Array<FileCreateInput>;
};


export type MutationCreateFoldersArgs = {
  input: Array<FolderCreateInput>;
};


export type MutationCreateUsArgs = {
  input: Array<MeCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteCabinetsArgs = {
  delete?: InputMaybe<CabinetDeleteInput>;
  where?: InputMaybe<CabinetWhere>;
};


export type MutationDeleteCategoriesArgs = {
  delete?: InputMaybe<CategoryDeleteInput>;
  where?: InputMaybe<CategoryWhere>;
};


export type MutationDeleteFilesArgs = {
  delete?: InputMaybe<FileDeleteInput>;
  where?: InputMaybe<FileWhere>;
};


export type MutationDeleteFoldersArgs = {
  delete?: InputMaybe<FolderDeleteInput>;
  where?: InputMaybe<FolderWhere>;
};


export type MutationDeleteUsArgs = {
  where?: InputMaybe<MeWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateCabinetsArgs = {
  connect?: InputMaybe<CabinetConnectInput>;
  create?: InputMaybe<CabinetRelationInput>;
  delete?: InputMaybe<CabinetDeleteInput>;
  disconnect?: InputMaybe<CabinetDisconnectInput>;
  update?: InputMaybe<CabinetUpdateInput>;
  where?: InputMaybe<CabinetWhere>;
};


export type MutationUpdateCategoriesArgs = {
  connect?: InputMaybe<CategoryConnectInput>;
  connectOrCreate?: InputMaybe<CategoryConnectOrCreateInput>;
  create?: InputMaybe<CategoryRelationInput>;
  delete?: InputMaybe<CategoryDeleteInput>;
  disconnect?: InputMaybe<CategoryDisconnectInput>;
  update?: InputMaybe<CategoryUpdateInput>;
  where?: InputMaybe<CategoryWhere>;
};


export type MutationUpdateFilesArgs = {
  connect?: InputMaybe<FileConnectInput>;
  create?: InputMaybe<FileRelationInput>;
  delete?: InputMaybe<FileDeleteInput>;
  disconnect?: InputMaybe<FileDisconnectInput>;
  update?: InputMaybe<FileUpdateInput>;
  where?: InputMaybe<FileWhere>;
};


export type MutationUpdateFoldersArgs = {
  connect?: InputMaybe<FolderConnectInput>;
  connectOrCreate?: InputMaybe<FolderConnectOrCreateInput>;
  create?: InputMaybe<FolderRelationInput>;
  delete?: InputMaybe<FolderDeleteInput>;
  disconnect?: InputMaybe<FolderDisconnectInput>;
  update?: InputMaybe<FolderUpdateInput>;
  where?: InputMaybe<FolderWhere>;
};


export type MutationUpdateUsArgs = {
  update?: InputMaybe<MeUpdateInput>;
  where?: InputMaybe<MeWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  cabinets: Array<Cabinet>;
  cabinetsAggregate: CabinetAggregateSelection;
  cabinetsConnection: CabinetsConnection;
  categories: Array<Category>;
  categoriesAggregate: CategoryAggregateSelection;
  categoriesConnection: CategoriesConnection;
  files: Array<File>;
  filesAggregate: FileAggregateSelection;
  filesConnection: FilesConnection;
  folders: Array<Folder>;
  foldersAggregate: FolderAggregateSelection;
  foldersConnection: FoldersConnection;
  me: Me;
  us: Array<Me>;
  usAggregate: MeAggregateSelection;
  usConnection: UsConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};


export type QueryCabinetsArgs = {
  options?: InputMaybe<CabinetOptions>;
  where?: InputMaybe<CabinetWhere>;
};


export type QueryCabinetsAggregateArgs = {
  where?: InputMaybe<CabinetWhere>;
};


export type QueryCabinetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CabinetSort>>>;
  where?: InputMaybe<CabinetWhere>;
};


export type QueryCategoriesArgs = {
  options?: InputMaybe<CategoryOptions>;
  where?: InputMaybe<CategoryWhere>;
};


export type QueryCategoriesAggregateArgs = {
  where?: InputMaybe<CategoryWhere>;
};


export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CategorySort>>>;
  where?: InputMaybe<CategoryWhere>;
};


export type QueryFilesArgs = {
  options?: InputMaybe<FileOptions>;
  where?: InputMaybe<FileWhere>;
};


export type QueryFilesAggregateArgs = {
  where?: InputMaybe<FileWhere>;
};


export type QueryFilesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FileSort>>>;
  where?: InputMaybe<FileWhere>;
};


export type QueryFoldersArgs = {
  options?: InputMaybe<FolderOptions>;
  where?: InputMaybe<FolderWhere>;
};


export type QueryFoldersAggregateArgs = {
  where?: InputMaybe<FolderWhere>;
};


export type QueryFoldersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<FolderSort>>>;
  where?: InputMaybe<FolderWhere>;
};


export type QueryUsArgs = {
  options?: InputMaybe<MeOptions>;
  where?: InputMaybe<MeWhere>;
};


export type QueryUsAggregateArgs = {
  where?: InputMaybe<MeWhere>;
};


export type QueryUsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MeSort>>>;
  where?: InputMaybe<MeWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateCabinetsMutationResponse = {
  __typename?: 'UpdateCabinetsMutationResponse';
  cabinets: Array<Cabinet>;
  info: UpdateInfo;
};

export type UpdateCategoriesMutationResponse = {
  __typename?: 'UpdateCategoriesMutationResponse';
  categories: Array<Category>;
  info: UpdateInfo;
};

export type UpdateFilesMutationResponse = {
  __typename?: 'UpdateFilesMutationResponse';
  files: Array<File>;
  info: UpdateInfo;
};

export type UpdateFoldersMutationResponse = {
  __typename?: 'UpdateFoldersMutationResponse';
  folders: Array<Folder>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateUsMutationResponse = {
  __typename?: 'UpdateUsMutationResponse';
  info: UpdateInfo;
  us: Array<Me>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type UsConnection = {
  __typename?: 'UsConnection';
  edges: Array<MeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  cabinets: Array<Cabinet>;
  cabinetsAggregate?: Maybe<UserCabinetCabinetsAggregationSelection>;
  cabinetsConnection: UserCabinetsConnection;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};


export type UserCabinetsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CabinetOptions>;
  where?: InputMaybe<CabinetWhere>;
};


export type UserCabinetsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CabinetWhere>;
};


export type UserCabinetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserCabinetsConnectionSort>>;
  where?: InputMaybe<UserCabinetsConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type UserCabinetCabinetsAggregationSelection = {
  __typename?: 'UserCabinetCabinetsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<UserCabinetCabinetsNodeAggregateSelection>;
};

export type UserCabinetCabinetsNodeAggregateSelection = {
  __typename?: 'UserCabinetCabinetsNodeAggregateSelection';
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type UserCabinetsAggregateInput = {
  AND?: InputMaybe<Array<UserCabinetsAggregateInput>>;
  NOT?: InputMaybe<UserCabinetsAggregateInput>;
  OR?: InputMaybe<Array<UserCabinetsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<UserCabinetsNodeAggregationWhereInput>;
};

export type UserCabinetsConnectFieldInput = {
  connect?: InputMaybe<Array<CabinetConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CabinetConnectWhere>;
};

export type UserCabinetsConnection = {
  __typename?: 'UserCabinetsConnection';
  edges: Array<UserCabinetsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserCabinetsConnectionSort = {
  node?: InputMaybe<CabinetSort>;
};

export type UserCabinetsConnectionWhere = {
  AND?: InputMaybe<Array<UserCabinetsConnectionWhere>>;
  NOT?: InputMaybe<UserCabinetsConnectionWhere>;
  OR?: InputMaybe<Array<UserCabinetsConnectionWhere>>;
  node?: InputMaybe<CabinetWhere>;
};

export type UserCabinetsCreateFieldInput = {
  node: CabinetCreateInput;
};

export type UserCabinetsDeleteFieldInput = {
  delete?: InputMaybe<CabinetDeleteInput>;
  where?: InputMaybe<UserCabinetsConnectionWhere>;
};

export type UserCabinetsDisconnectFieldInput = {
  disconnect?: InputMaybe<CabinetDisconnectInput>;
  where?: InputMaybe<UserCabinetsConnectionWhere>;
};

export type UserCabinetsFieldInput = {
  connect?: InputMaybe<Array<UserCabinetsConnectFieldInput>>;
  create?: InputMaybe<Array<UserCabinetsCreateFieldInput>>;
};

export type UserCabinetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserCabinetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserCabinetsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<UserCabinetsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCabinetsRelationship = {
  __typename?: 'UserCabinetsRelationship';
  cursor: Scalars['String']['output'];
  node: Cabinet;
};

export type UserCabinetsUpdateConnectionInput = {
  node?: InputMaybe<CabinetUpdateInput>;
};

export type UserCabinetsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserCabinetsConnectFieldInput>>;
  create?: InputMaybe<Array<UserCabinetsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserCabinetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserCabinetsDisconnectFieldInput>>;
  update?: InputMaybe<UserCabinetsUpdateConnectionInput>;
  where?: InputMaybe<UserCabinetsConnectionWhere>;
};

export type UserConnectInput = {
  cabinets?: InputMaybe<Array<UserCabinetsConnectFieldInput>>;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  cabinets?: InputMaybe<UserCabinetsFieldInput>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserDeleteInput = {
  cabinets?: InputMaybe<Array<UserCabinetsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  cabinets?: InputMaybe<Array<UserCabinetsDisconnectFieldInput>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRelationInput = {
  cabinets?: InputMaybe<Array<UserCabinetsCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  cabinets?: InputMaybe<Array<UserCabinetsUpdateFieldInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  cabinetsAggregate?: InputMaybe<UserCabinetsAggregateInput>;
  /** Return Users where all of the related UserCabinetsConnections match this filter */
  cabinetsConnection_ALL?: InputMaybe<UserCabinetsConnectionWhere>;
  /** Return Users where none of the related UserCabinetsConnections match this filter */
  cabinetsConnection_NONE?: InputMaybe<UserCabinetsConnectionWhere>;
  /** Return Users where one of the related UserCabinetsConnections match this filter */
  cabinetsConnection_SINGLE?: InputMaybe<UserCabinetsConnectionWhere>;
  /** Return Users where some of the related UserCabinetsConnections match this filter */
  cabinetsConnection_SOME?: InputMaybe<UserCabinetsConnectionWhere>;
  /** Return Users where all of the related Cabinets match this filter */
  cabinets_ALL?: InputMaybe<CabinetWhere>;
  /** Return Users where none of the related Cabinets match this filter */
  cabinets_NONE?: InputMaybe<CabinetWhere>;
  /** Return Users where one of the related Cabinets match this filter */
  cabinets_SINGLE?: InputMaybe<CabinetWhere>;
  /** Return Users where some of the related Cabinets match this filter */
  cabinets_SOME?: InputMaybe<CabinetWhere>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cabinet: ResolverTypeWrapper<Cabinet>;
  CabinetAggregateSelection: ResolverTypeWrapper<CabinetAggregateSelection>;
  CabinetCategoriesAggregateInput: CabinetCategoriesAggregateInput;
  CabinetCategoriesConnectFieldInput: CabinetCategoriesConnectFieldInput;
  CabinetCategoriesConnection: ResolverTypeWrapper<CabinetCategoriesConnection>;
  CabinetCategoriesConnectionSort: CabinetCategoriesConnectionSort;
  CabinetCategoriesConnectionWhere: CabinetCategoriesConnectionWhere;
  CabinetCategoriesCreateFieldInput: CabinetCategoriesCreateFieldInput;
  CabinetCategoriesDeleteFieldInput: CabinetCategoriesDeleteFieldInput;
  CabinetCategoriesDisconnectFieldInput: CabinetCategoriesDisconnectFieldInput;
  CabinetCategoriesFieldInput: CabinetCategoriesFieldInput;
  CabinetCategoriesNodeAggregationWhereInput: CabinetCategoriesNodeAggregationWhereInput;
  CabinetCategoriesRelationship: ResolverTypeWrapper<CabinetCategoriesRelationship>;
  CabinetCategoriesUpdateConnectionInput: CabinetCategoriesUpdateConnectionInput;
  CabinetCategoriesUpdateFieldInput: CabinetCategoriesUpdateFieldInput;
  CabinetCategoryCategoriesAggregationSelection: ResolverTypeWrapper<CabinetCategoryCategoriesAggregationSelection>;
  CabinetCategoryCategoriesNodeAggregateSelection: ResolverTypeWrapper<CabinetCategoryCategoriesNodeAggregateSelection>;
  CabinetConnectInput: CabinetConnectInput;
  CabinetConnectWhere: CabinetConnectWhere;
  CabinetCreateInput: CabinetCreateInput;
  CabinetDeleteInput: CabinetDeleteInput;
  CabinetDisconnectInput: CabinetDisconnectInput;
  CabinetEdge: ResolverTypeWrapper<CabinetEdge>;
  CabinetFolderFoldersAggregationSelection: ResolverTypeWrapper<CabinetFolderFoldersAggregationSelection>;
  CabinetFolderFoldersNodeAggregateSelection: ResolverTypeWrapper<CabinetFolderFoldersNodeAggregateSelection>;
  CabinetFoldersAggregateInput: CabinetFoldersAggregateInput;
  CabinetFoldersConnectFieldInput: CabinetFoldersConnectFieldInput;
  CabinetFoldersConnection: ResolverTypeWrapper<CabinetFoldersConnection>;
  CabinetFoldersConnectionSort: CabinetFoldersConnectionSort;
  CabinetFoldersConnectionWhere: CabinetFoldersConnectionWhere;
  CabinetFoldersCreateFieldInput: CabinetFoldersCreateFieldInput;
  CabinetFoldersDeleteFieldInput: CabinetFoldersDeleteFieldInput;
  CabinetFoldersDisconnectFieldInput: CabinetFoldersDisconnectFieldInput;
  CabinetFoldersFieldInput: CabinetFoldersFieldInput;
  CabinetFoldersNodeAggregationWhereInput: CabinetFoldersNodeAggregationWhereInput;
  CabinetFoldersRelationship: ResolverTypeWrapper<CabinetFoldersRelationship>;
  CabinetFoldersUpdateConnectionInput: CabinetFoldersUpdateConnectionInput;
  CabinetFoldersUpdateFieldInput: CabinetFoldersUpdateFieldInput;
  CabinetOptions: CabinetOptions;
  CabinetRelationInput: CabinetRelationInput;
  CabinetSort: CabinetSort;
  CabinetUpdateInput: CabinetUpdateInput;
  CabinetUserAggregateInput: CabinetUserAggregateInput;
  CabinetUserConnectFieldInput: CabinetUserConnectFieldInput;
  CabinetUserConnection: ResolverTypeWrapper<CabinetUserConnection>;
  CabinetUserConnectionSort: CabinetUserConnectionSort;
  CabinetUserConnectionWhere: CabinetUserConnectionWhere;
  CabinetUserCreateFieldInput: CabinetUserCreateFieldInput;
  CabinetUserDeleteFieldInput: CabinetUserDeleteFieldInput;
  CabinetUserDisconnectFieldInput: CabinetUserDisconnectFieldInput;
  CabinetUserFieldInput: CabinetUserFieldInput;
  CabinetUserNodeAggregationWhereInput: CabinetUserNodeAggregationWhereInput;
  CabinetUserRelationship: ResolverTypeWrapper<CabinetUserRelationship>;
  CabinetUserUpdateConnectionInput: CabinetUserUpdateConnectionInput;
  CabinetUserUpdateFieldInput: CabinetUserUpdateFieldInput;
  CabinetUserUserAggregationSelection: ResolverTypeWrapper<CabinetUserUserAggregationSelection>;
  CabinetUserUserNodeAggregateSelection: ResolverTypeWrapper<CabinetUserUserNodeAggregateSelection>;
  CabinetWhere: CabinetWhere;
  CabinetsConnection: ResolverTypeWrapper<CabinetsConnection>;
  CategoriesConnection: ResolverTypeWrapper<CategoriesConnection>;
  Category: ResolverTypeWrapper<Category>;
  CategoryAggregateSelection: ResolverTypeWrapper<CategoryAggregateSelection>;
  CategoryCabinetAggregateInput: CategoryCabinetAggregateInput;
  CategoryCabinetCabinetAggregationSelection: ResolverTypeWrapper<CategoryCabinetCabinetAggregationSelection>;
  CategoryCabinetCabinetNodeAggregateSelection: ResolverTypeWrapper<CategoryCabinetCabinetNodeAggregateSelection>;
  CategoryCabinetConnectFieldInput: CategoryCabinetConnectFieldInput;
  CategoryCabinetConnection: ResolverTypeWrapper<CategoryCabinetConnection>;
  CategoryCabinetConnectionSort: CategoryCabinetConnectionSort;
  CategoryCabinetConnectionWhere: CategoryCabinetConnectionWhere;
  CategoryCabinetCreateFieldInput: CategoryCabinetCreateFieldInput;
  CategoryCabinetDeleteFieldInput: CategoryCabinetDeleteFieldInput;
  CategoryCabinetDisconnectFieldInput: CategoryCabinetDisconnectFieldInput;
  CategoryCabinetFieldInput: CategoryCabinetFieldInput;
  CategoryCabinetNodeAggregationWhereInput: CategoryCabinetNodeAggregationWhereInput;
  CategoryCabinetRelationship: ResolverTypeWrapper<CategoryCabinetRelationship>;
  CategoryCabinetUpdateConnectionInput: CategoryCabinetUpdateConnectionInput;
  CategoryCabinetUpdateFieldInput: CategoryCabinetUpdateFieldInput;
  CategoryConnectInput: CategoryConnectInput;
  CategoryConnectOrCreateInput: CategoryConnectOrCreateInput;
  CategoryConnectWhere: CategoryConnectWhere;
  CategoryCreateInput: CategoryCreateInput;
  CategoryDeleteInput: CategoryDeleteInput;
  CategoryDisconnectInput: CategoryDisconnectInput;
  CategoryEdge: ResolverTypeWrapper<CategoryEdge>;
  CategoryFileFilesAggregationSelection: ResolverTypeWrapper<CategoryFileFilesAggregationSelection>;
  CategoryFileFilesNodeAggregateSelection: ResolverTypeWrapper<CategoryFileFilesNodeAggregateSelection>;
  CategoryFilesAggregateInput: CategoryFilesAggregateInput;
  CategoryFilesConnectFieldInput: CategoryFilesConnectFieldInput;
  CategoryFilesConnectOrCreateFieldInput: CategoryFilesConnectOrCreateFieldInput;
  CategoryFilesConnectOrCreateFieldInputOnCreate: CategoryFilesConnectOrCreateFieldInputOnCreate;
  CategoryFilesConnection: ResolverTypeWrapper<CategoryFilesConnection>;
  CategoryFilesConnectionSort: CategoryFilesConnectionSort;
  CategoryFilesConnectionWhere: CategoryFilesConnectionWhere;
  CategoryFilesCreateFieldInput: CategoryFilesCreateFieldInput;
  CategoryFilesDeleteFieldInput: CategoryFilesDeleteFieldInput;
  CategoryFilesDisconnectFieldInput: CategoryFilesDisconnectFieldInput;
  CategoryFilesFieldInput: CategoryFilesFieldInput;
  CategoryFilesNodeAggregationWhereInput: CategoryFilesNodeAggregationWhereInput;
  CategoryFilesRelationship: ResolverTypeWrapper<CategoryFilesRelationship>;
  CategoryFilesUpdateConnectionInput: CategoryFilesUpdateConnectionInput;
  CategoryFilesUpdateFieldInput: CategoryFilesUpdateFieldInput;
  CategoryFolderAggregateInput: CategoryFolderAggregateInput;
  CategoryFolderConnectFieldInput: CategoryFolderConnectFieldInput;
  CategoryFolderConnection: ResolverTypeWrapper<CategoryFolderConnection>;
  CategoryFolderConnectionSort: CategoryFolderConnectionSort;
  CategoryFolderConnectionWhere: CategoryFolderConnectionWhere;
  CategoryFolderCreateFieldInput: CategoryFolderCreateFieldInput;
  CategoryFolderDeleteFieldInput: CategoryFolderDeleteFieldInput;
  CategoryFolderDisconnectFieldInput: CategoryFolderDisconnectFieldInput;
  CategoryFolderFieldInput: CategoryFolderFieldInput;
  CategoryFolderFolderAggregationSelection: ResolverTypeWrapper<CategoryFolderFolderAggregationSelection>;
  CategoryFolderFolderEdgeAggregateSelection: ResolverTypeWrapper<CategoryFolderFolderEdgeAggregateSelection>;
  CategoryFolderFolderNodeAggregateSelection: ResolverTypeWrapper<CategoryFolderFolderNodeAggregateSelection>;
  CategoryFolderNodeAggregationWhereInput: CategoryFolderNodeAggregationWhereInput;
  CategoryFolderRelationship: ResolverTypeWrapper<CategoryFolderRelationship>;
  CategoryFolderUpdateConnectionInput: CategoryFolderUpdateConnectionInput;
  CategoryFolderUpdateFieldInput: CategoryFolderUpdateFieldInput;
  CategoryOptions: CategoryOptions;
  CategoryRelationInput: CategoryRelationInput;
  CategorySort: CategorySort;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryWhere: CategoryWhere;
  ColorType: ResolverTypeWrapper<ColorType>;
  ColorTypeAggregationWhereInput: ColorTypeAggregationWhereInput;
  ColorTypeCreateInput: ColorTypeCreateInput;
  ColorTypeSort: ColorTypeSort;
  ColorTypeUpdateInput: ColorTypeUpdateInput;
  ColorTypeWhere: ColorTypeWhere;
  CreateCabinetsMutationResponse: ResolverTypeWrapper<CreateCabinetsMutationResponse>;
  CreateCategoriesMutationResponse: ResolverTypeWrapper<CreateCategoriesMutationResponse>;
  CreateFilesMutationResponse: ResolverTypeWrapper<CreateFilesMutationResponse>;
  CreateFoldersMutationResponse: ResolverTypeWrapper<CreateFoldersMutationResponse>;
  CreateInfo: ResolverTypeWrapper<CreateInfo>;
  CreateUsMutationResponse: ResolverTypeWrapper<CreateUsMutationResponse>;
  CreateUsersMutationResponse: ResolverTypeWrapper<CreateUsersMutationResponse>;
  DeleteInfo: ResolverTypeWrapper<DeleteInfo>;
  File: ResolverTypeWrapper<File>;
  FileAggregateSelection: ResolverTypeWrapper<FileAggregateSelection>;
  FileCategoryAggregateInput: FileCategoryAggregateInput;
  FileCategoryCategoryAggregationSelection: ResolverTypeWrapper<FileCategoryCategoryAggregationSelection>;
  FileCategoryCategoryNodeAggregateSelection: ResolverTypeWrapper<FileCategoryCategoryNodeAggregateSelection>;
  FileCategoryConnectFieldInput: FileCategoryConnectFieldInput;
  FileCategoryConnection: ResolverTypeWrapper<FileCategoryConnection>;
  FileCategoryConnectionSort: FileCategoryConnectionSort;
  FileCategoryConnectionWhere: FileCategoryConnectionWhere;
  FileCategoryCreateFieldInput: FileCategoryCreateFieldInput;
  FileCategoryDeleteFieldInput: FileCategoryDeleteFieldInput;
  FileCategoryDisconnectFieldInput: FileCategoryDisconnectFieldInput;
  FileCategoryFieldInput: FileCategoryFieldInput;
  FileCategoryNodeAggregationWhereInput: FileCategoryNodeAggregationWhereInput;
  FileCategoryRelationship: ResolverTypeWrapper<FileCategoryRelationship>;
  FileCategoryUpdateConnectionInput: FileCategoryUpdateConnectionInput;
  FileCategoryUpdateFieldInput: FileCategoryUpdateFieldInput;
  FileConnectInput: FileConnectInput;
  FileConnectOrCreateWhere: FileConnectOrCreateWhere;
  FileConnectWhere: FileConnectWhere;
  FileCreateInput: FileCreateInput;
  FileDeleteInput: FileDeleteInput;
  FileDisconnectInput: FileDisconnectInput;
  FileEdge: ResolverTypeWrapper<FileEdge>;
  FileFolderAggregateInput: FileFolderAggregateInput;
  FileFolderConnectFieldInput: FileFolderConnectFieldInput;
  FileFolderConnection: ResolverTypeWrapper<FileFolderConnection>;
  FileFolderConnectionSort: FileFolderConnectionSort;
  FileFolderConnectionWhere: FileFolderConnectionWhere;
  FileFolderCreateFieldInput: FileFolderCreateFieldInput;
  FileFolderDeleteFieldInput: FileFolderDeleteFieldInput;
  FileFolderDisconnectFieldInput: FileFolderDisconnectFieldInput;
  FileFolderFieldInput: FileFolderFieldInput;
  FileFolderFolderAggregationSelection: ResolverTypeWrapper<FileFolderFolderAggregationSelection>;
  FileFolderFolderNodeAggregateSelection: ResolverTypeWrapper<FileFolderFolderNodeAggregateSelection>;
  FileFolderNodeAggregationWhereInput: FileFolderNodeAggregationWhereInput;
  FileFolderRelationship: ResolverTypeWrapper<FileFolderRelationship>;
  FileFolderUpdateConnectionInput: FileFolderUpdateConnectionInput;
  FileFolderUpdateFieldInput: FileFolderUpdateFieldInput;
  FileOnCreateInput: FileOnCreateInput;
  FileOptions: FileOptions;
  FileRelationInput: FileRelationInput;
  FileSort: FileSort;
  FileUniqueWhere: FileUniqueWhere;
  FileUpdateInput: FileUpdateInput;
  FileWhere: FileWhere;
  FilesConnection: ResolverTypeWrapper<FilesConnection>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Folder: ResolverTypeWrapper<Folder>;
  FolderAggregateSelection: ResolverTypeWrapper<FolderAggregateSelection>;
  FolderCabinetAggregateInput: FolderCabinetAggregateInput;
  FolderCabinetCabinetAggregationSelection: ResolverTypeWrapper<FolderCabinetCabinetAggregationSelection>;
  FolderCabinetCabinetNodeAggregateSelection: ResolverTypeWrapper<FolderCabinetCabinetNodeAggregateSelection>;
  FolderCabinetConnectFieldInput: FolderCabinetConnectFieldInput;
  FolderCabinetConnection: ResolverTypeWrapper<FolderCabinetConnection>;
  FolderCabinetConnectionSort: FolderCabinetConnectionSort;
  FolderCabinetConnectionWhere: FolderCabinetConnectionWhere;
  FolderCabinetCreateFieldInput: FolderCabinetCreateFieldInput;
  FolderCabinetDeleteFieldInput: FolderCabinetDeleteFieldInput;
  FolderCabinetDisconnectFieldInput: FolderCabinetDisconnectFieldInput;
  FolderCabinetFieldInput: FolderCabinetFieldInput;
  FolderCabinetNodeAggregationWhereInput: FolderCabinetNodeAggregationWhereInput;
  FolderCabinetRelationship: ResolverTypeWrapper<FolderCabinetRelationship>;
  FolderCabinetUpdateConnectionInput: FolderCabinetUpdateConnectionInput;
  FolderCabinetUpdateFieldInput: FolderCabinetUpdateFieldInput;
  FolderCategoriesAggregateInput: FolderCategoriesAggregateInput;
  FolderCategoriesConnectFieldInput: FolderCategoriesConnectFieldInput;
  FolderCategoriesConnection: ResolverTypeWrapper<FolderCategoriesConnection>;
  FolderCategoriesConnectionSort: FolderCategoriesConnectionSort;
  FolderCategoriesConnectionWhere: FolderCategoriesConnectionWhere;
  FolderCategoriesCreateFieldInput: FolderCategoriesCreateFieldInput;
  FolderCategoriesDeleteFieldInput: FolderCategoriesDeleteFieldInput;
  FolderCategoriesDisconnectFieldInput: FolderCategoriesDisconnectFieldInput;
  FolderCategoriesFieldInput: FolderCategoriesFieldInput;
  FolderCategoriesNodeAggregationWhereInput: FolderCategoriesNodeAggregationWhereInput;
  FolderCategoriesRelationship: ResolverTypeWrapper<FolderCategoriesRelationship>;
  FolderCategoriesUpdateConnectionInput: FolderCategoriesUpdateConnectionInput;
  FolderCategoriesUpdateFieldInput: FolderCategoriesUpdateFieldInput;
  FolderCategoryCategoriesAggregationSelection: ResolverTypeWrapper<FolderCategoryCategoriesAggregationSelection>;
  FolderCategoryCategoriesEdgeAggregateSelection: ResolverTypeWrapper<FolderCategoryCategoriesEdgeAggregateSelection>;
  FolderCategoryCategoriesNodeAggregateSelection: ResolverTypeWrapper<FolderCategoryCategoriesNodeAggregateSelection>;
  FolderConnectInput: FolderConnectInput;
  FolderConnectOrCreateInput: FolderConnectOrCreateInput;
  FolderConnectWhere: FolderConnectWhere;
  FolderCreateInput: FolderCreateInput;
  FolderDeleteInput: FolderDeleteInput;
  FolderDisconnectInput: FolderDisconnectInput;
  FolderEdge: ResolverTypeWrapper<FolderEdge>;
  FolderFileFilesAggregationSelection: ResolverTypeWrapper<FolderFileFilesAggregationSelection>;
  FolderFileFilesNodeAggregateSelection: ResolverTypeWrapper<FolderFileFilesNodeAggregateSelection>;
  FolderFilesAggregateInput: FolderFilesAggregateInput;
  FolderFilesConnectFieldInput: FolderFilesConnectFieldInput;
  FolderFilesConnectOrCreateFieldInput: FolderFilesConnectOrCreateFieldInput;
  FolderFilesConnectOrCreateFieldInputOnCreate: FolderFilesConnectOrCreateFieldInputOnCreate;
  FolderFilesConnection: ResolverTypeWrapper<FolderFilesConnection>;
  FolderFilesConnectionSort: FolderFilesConnectionSort;
  FolderFilesConnectionWhere: FolderFilesConnectionWhere;
  FolderFilesCreateFieldInput: FolderFilesCreateFieldInput;
  FolderFilesDeleteFieldInput: FolderFilesDeleteFieldInput;
  FolderFilesDisconnectFieldInput: FolderFilesDisconnectFieldInput;
  FolderFilesFieldInput: FolderFilesFieldInput;
  FolderFilesNodeAggregationWhereInput: FolderFilesNodeAggregationWhereInput;
  FolderFilesRelationship: ResolverTypeWrapper<FolderFilesRelationship>;
  FolderFilesUpdateConnectionInput: FolderFilesUpdateConnectionInput;
  FolderFilesUpdateFieldInput: FolderFilesUpdateFieldInput;
  FolderOptions: FolderOptions;
  FolderRelationInput: FolderRelationInput;
  FolderSort: FolderSort;
  FolderUpdateInput: FolderUpdateInput;
  FolderWhere: FolderWhere;
  FoldersConnection: ResolverTypeWrapper<FoldersConnection>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  IDAggregateSelection: ResolverTypeWrapper<IdAggregateSelection>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Me: ResolverTypeWrapper<Me>;
  MeAggregateSelection: ResolverTypeWrapper<MeAggregateSelection>;
  MeCreateInput: MeCreateInput;
  MeEdge: ResolverTypeWrapper<MeEdge>;
  MeOptions: MeOptions;
  MeSort: MeSort;
  MeUpdateInput: MeUpdateInput;
  MeWhere: MeWhere;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringAggregateSelection: ResolverTypeWrapper<StringAggregateSelection>;
  UpdateCabinetsMutationResponse: ResolverTypeWrapper<UpdateCabinetsMutationResponse>;
  UpdateCategoriesMutationResponse: ResolverTypeWrapper<UpdateCategoriesMutationResponse>;
  UpdateFilesMutationResponse: ResolverTypeWrapper<UpdateFilesMutationResponse>;
  UpdateFoldersMutationResponse: ResolverTypeWrapper<UpdateFoldersMutationResponse>;
  UpdateInfo: ResolverTypeWrapper<UpdateInfo>;
  UpdateUsMutationResponse: ResolverTypeWrapper<UpdateUsMutationResponse>;
  UpdateUsersMutationResponse: ResolverTypeWrapper<UpdateUsersMutationResponse>;
  UsConnection: ResolverTypeWrapper<UsConnection>;
  User: ResolverTypeWrapper<User>;
  UserAggregateSelection: ResolverTypeWrapper<UserAggregateSelection>;
  UserCabinetCabinetsAggregationSelection: ResolverTypeWrapper<UserCabinetCabinetsAggregationSelection>;
  UserCabinetCabinetsNodeAggregateSelection: ResolverTypeWrapper<UserCabinetCabinetsNodeAggregateSelection>;
  UserCabinetsAggregateInput: UserCabinetsAggregateInput;
  UserCabinetsConnectFieldInput: UserCabinetsConnectFieldInput;
  UserCabinetsConnection: ResolverTypeWrapper<UserCabinetsConnection>;
  UserCabinetsConnectionSort: UserCabinetsConnectionSort;
  UserCabinetsConnectionWhere: UserCabinetsConnectionWhere;
  UserCabinetsCreateFieldInput: UserCabinetsCreateFieldInput;
  UserCabinetsDeleteFieldInput: UserCabinetsDeleteFieldInput;
  UserCabinetsDisconnectFieldInput: UserCabinetsDisconnectFieldInput;
  UserCabinetsFieldInput: UserCabinetsFieldInput;
  UserCabinetsNodeAggregationWhereInput: UserCabinetsNodeAggregationWhereInput;
  UserCabinetsRelationship: ResolverTypeWrapper<UserCabinetsRelationship>;
  UserCabinetsUpdateConnectionInput: UserCabinetsUpdateConnectionInput;
  UserCabinetsUpdateFieldInput: UserCabinetsUpdateFieldInput;
  UserConnectInput: UserConnectInput;
  UserConnectWhere: UserConnectWhere;
  UserCreateInput: UserCreateInput;
  UserDeleteInput: UserDeleteInput;
  UserDisconnectInput: UserDisconnectInput;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserOptions: UserOptions;
  UserRelationInput: UserRelationInput;
  UserSort: UserSort;
  UserUpdateInput: UserUpdateInput;
  UserWhere: UserWhere;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Cabinet: Cabinet;
  CabinetAggregateSelection: CabinetAggregateSelection;
  CabinetCategoriesAggregateInput: CabinetCategoriesAggregateInput;
  CabinetCategoriesConnectFieldInput: CabinetCategoriesConnectFieldInput;
  CabinetCategoriesConnection: CabinetCategoriesConnection;
  CabinetCategoriesConnectionSort: CabinetCategoriesConnectionSort;
  CabinetCategoriesConnectionWhere: CabinetCategoriesConnectionWhere;
  CabinetCategoriesCreateFieldInput: CabinetCategoriesCreateFieldInput;
  CabinetCategoriesDeleteFieldInput: CabinetCategoriesDeleteFieldInput;
  CabinetCategoriesDisconnectFieldInput: CabinetCategoriesDisconnectFieldInput;
  CabinetCategoriesFieldInput: CabinetCategoriesFieldInput;
  CabinetCategoriesNodeAggregationWhereInput: CabinetCategoriesNodeAggregationWhereInput;
  CabinetCategoriesRelationship: CabinetCategoriesRelationship;
  CabinetCategoriesUpdateConnectionInput: CabinetCategoriesUpdateConnectionInput;
  CabinetCategoriesUpdateFieldInput: CabinetCategoriesUpdateFieldInput;
  CabinetCategoryCategoriesAggregationSelection: CabinetCategoryCategoriesAggregationSelection;
  CabinetCategoryCategoriesNodeAggregateSelection: CabinetCategoryCategoriesNodeAggregateSelection;
  CabinetConnectInput: CabinetConnectInput;
  CabinetConnectWhere: CabinetConnectWhere;
  CabinetCreateInput: CabinetCreateInput;
  CabinetDeleteInput: CabinetDeleteInput;
  CabinetDisconnectInput: CabinetDisconnectInput;
  CabinetEdge: CabinetEdge;
  CabinetFolderFoldersAggregationSelection: CabinetFolderFoldersAggregationSelection;
  CabinetFolderFoldersNodeAggregateSelection: CabinetFolderFoldersNodeAggregateSelection;
  CabinetFoldersAggregateInput: CabinetFoldersAggregateInput;
  CabinetFoldersConnectFieldInput: CabinetFoldersConnectFieldInput;
  CabinetFoldersConnection: CabinetFoldersConnection;
  CabinetFoldersConnectionSort: CabinetFoldersConnectionSort;
  CabinetFoldersConnectionWhere: CabinetFoldersConnectionWhere;
  CabinetFoldersCreateFieldInput: CabinetFoldersCreateFieldInput;
  CabinetFoldersDeleteFieldInput: CabinetFoldersDeleteFieldInput;
  CabinetFoldersDisconnectFieldInput: CabinetFoldersDisconnectFieldInput;
  CabinetFoldersFieldInput: CabinetFoldersFieldInput;
  CabinetFoldersNodeAggregationWhereInput: CabinetFoldersNodeAggregationWhereInput;
  CabinetFoldersRelationship: CabinetFoldersRelationship;
  CabinetFoldersUpdateConnectionInput: CabinetFoldersUpdateConnectionInput;
  CabinetFoldersUpdateFieldInput: CabinetFoldersUpdateFieldInput;
  CabinetOptions: CabinetOptions;
  CabinetRelationInput: CabinetRelationInput;
  CabinetSort: CabinetSort;
  CabinetUpdateInput: CabinetUpdateInput;
  CabinetUserAggregateInput: CabinetUserAggregateInput;
  CabinetUserConnectFieldInput: CabinetUserConnectFieldInput;
  CabinetUserConnection: CabinetUserConnection;
  CabinetUserConnectionSort: CabinetUserConnectionSort;
  CabinetUserConnectionWhere: CabinetUserConnectionWhere;
  CabinetUserCreateFieldInput: CabinetUserCreateFieldInput;
  CabinetUserDeleteFieldInput: CabinetUserDeleteFieldInput;
  CabinetUserDisconnectFieldInput: CabinetUserDisconnectFieldInput;
  CabinetUserFieldInput: CabinetUserFieldInput;
  CabinetUserNodeAggregationWhereInput: CabinetUserNodeAggregationWhereInput;
  CabinetUserRelationship: CabinetUserRelationship;
  CabinetUserUpdateConnectionInput: CabinetUserUpdateConnectionInput;
  CabinetUserUpdateFieldInput: CabinetUserUpdateFieldInput;
  CabinetUserUserAggregationSelection: CabinetUserUserAggregationSelection;
  CabinetUserUserNodeAggregateSelection: CabinetUserUserNodeAggregateSelection;
  CabinetWhere: CabinetWhere;
  CabinetsConnection: CabinetsConnection;
  CategoriesConnection: CategoriesConnection;
  Category: Category;
  CategoryAggregateSelection: CategoryAggregateSelection;
  CategoryCabinetAggregateInput: CategoryCabinetAggregateInput;
  CategoryCabinetCabinetAggregationSelection: CategoryCabinetCabinetAggregationSelection;
  CategoryCabinetCabinetNodeAggregateSelection: CategoryCabinetCabinetNodeAggregateSelection;
  CategoryCabinetConnectFieldInput: CategoryCabinetConnectFieldInput;
  CategoryCabinetConnection: CategoryCabinetConnection;
  CategoryCabinetConnectionSort: CategoryCabinetConnectionSort;
  CategoryCabinetConnectionWhere: CategoryCabinetConnectionWhere;
  CategoryCabinetCreateFieldInput: CategoryCabinetCreateFieldInput;
  CategoryCabinetDeleteFieldInput: CategoryCabinetDeleteFieldInput;
  CategoryCabinetDisconnectFieldInput: CategoryCabinetDisconnectFieldInput;
  CategoryCabinetFieldInput: CategoryCabinetFieldInput;
  CategoryCabinetNodeAggregationWhereInput: CategoryCabinetNodeAggregationWhereInput;
  CategoryCabinetRelationship: CategoryCabinetRelationship;
  CategoryCabinetUpdateConnectionInput: CategoryCabinetUpdateConnectionInput;
  CategoryCabinetUpdateFieldInput: CategoryCabinetUpdateFieldInput;
  CategoryConnectInput: CategoryConnectInput;
  CategoryConnectOrCreateInput: CategoryConnectOrCreateInput;
  CategoryConnectWhere: CategoryConnectWhere;
  CategoryCreateInput: CategoryCreateInput;
  CategoryDeleteInput: CategoryDeleteInput;
  CategoryDisconnectInput: CategoryDisconnectInput;
  CategoryEdge: CategoryEdge;
  CategoryFileFilesAggregationSelection: CategoryFileFilesAggregationSelection;
  CategoryFileFilesNodeAggregateSelection: CategoryFileFilesNodeAggregateSelection;
  CategoryFilesAggregateInput: CategoryFilesAggregateInput;
  CategoryFilesConnectFieldInput: CategoryFilesConnectFieldInput;
  CategoryFilesConnectOrCreateFieldInput: CategoryFilesConnectOrCreateFieldInput;
  CategoryFilesConnectOrCreateFieldInputOnCreate: CategoryFilesConnectOrCreateFieldInputOnCreate;
  CategoryFilesConnection: CategoryFilesConnection;
  CategoryFilesConnectionSort: CategoryFilesConnectionSort;
  CategoryFilesConnectionWhere: CategoryFilesConnectionWhere;
  CategoryFilesCreateFieldInput: CategoryFilesCreateFieldInput;
  CategoryFilesDeleteFieldInput: CategoryFilesDeleteFieldInput;
  CategoryFilesDisconnectFieldInput: CategoryFilesDisconnectFieldInput;
  CategoryFilesFieldInput: CategoryFilesFieldInput;
  CategoryFilesNodeAggregationWhereInput: CategoryFilesNodeAggregationWhereInput;
  CategoryFilesRelationship: CategoryFilesRelationship;
  CategoryFilesUpdateConnectionInput: CategoryFilesUpdateConnectionInput;
  CategoryFilesUpdateFieldInput: CategoryFilesUpdateFieldInput;
  CategoryFolderAggregateInput: CategoryFolderAggregateInput;
  CategoryFolderConnectFieldInput: CategoryFolderConnectFieldInput;
  CategoryFolderConnection: CategoryFolderConnection;
  CategoryFolderConnectionSort: CategoryFolderConnectionSort;
  CategoryFolderConnectionWhere: CategoryFolderConnectionWhere;
  CategoryFolderCreateFieldInput: CategoryFolderCreateFieldInput;
  CategoryFolderDeleteFieldInput: CategoryFolderDeleteFieldInput;
  CategoryFolderDisconnectFieldInput: CategoryFolderDisconnectFieldInput;
  CategoryFolderFieldInput: CategoryFolderFieldInput;
  CategoryFolderFolderAggregationSelection: CategoryFolderFolderAggregationSelection;
  CategoryFolderFolderEdgeAggregateSelection: CategoryFolderFolderEdgeAggregateSelection;
  CategoryFolderFolderNodeAggregateSelection: CategoryFolderFolderNodeAggregateSelection;
  CategoryFolderNodeAggregationWhereInput: CategoryFolderNodeAggregationWhereInput;
  CategoryFolderRelationship: CategoryFolderRelationship;
  CategoryFolderUpdateConnectionInput: CategoryFolderUpdateConnectionInput;
  CategoryFolderUpdateFieldInput: CategoryFolderUpdateFieldInput;
  CategoryOptions: CategoryOptions;
  CategoryRelationInput: CategoryRelationInput;
  CategorySort: CategorySort;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryWhere: CategoryWhere;
  ColorType: ColorType;
  ColorTypeAggregationWhereInput: ColorTypeAggregationWhereInput;
  ColorTypeCreateInput: ColorTypeCreateInput;
  ColorTypeSort: ColorTypeSort;
  ColorTypeUpdateInput: ColorTypeUpdateInput;
  ColorTypeWhere: ColorTypeWhere;
  CreateCabinetsMutationResponse: CreateCabinetsMutationResponse;
  CreateCategoriesMutationResponse: CreateCategoriesMutationResponse;
  CreateFilesMutationResponse: CreateFilesMutationResponse;
  CreateFoldersMutationResponse: CreateFoldersMutationResponse;
  CreateInfo: CreateInfo;
  CreateUsMutationResponse: CreateUsMutationResponse;
  CreateUsersMutationResponse: CreateUsersMutationResponse;
  DeleteInfo: DeleteInfo;
  File: File;
  FileAggregateSelection: FileAggregateSelection;
  FileCategoryAggregateInput: FileCategoryAggregateInput;
  FileCategoryCategoryAggregationSelection: FileCategoryCategoryAggregationSelection;
  FileCategoryCategoryNodeAggregateSelection: FileCategoryCategoryNodeAggregateSelection;
  FileCategoryConnectFieldInput: FileCategoryConnectFieldInput;
  FileCategoryConnection: FileCategoryConnection;
  FileCategoryConnectionSort: FileCategoryConnectionSort;
  FileCategoryConnectionWhere: FileCategoryConnectionWhere;
  FileCategoryCreateFieldInput: FileCategoryCreateFieldInput;
  FileCategoryDeleteFieldInput: FileCategoryDeleteFieldInput;
  FileCategoryDisconnectFieldInput: FileCategoryDisconnectFieldInput;
  FileCategoryFieldInput: FileCategoryFieldInput;
  FileCategoryNodeAggregationWhereInput: FileCategoryNodeAggregationWhereInput;
  FileCategoryRelationship: FileCategoryRelationship;
  FileCategoryUpdateConnectionInput: FileCategoryUpdateConnectionInput;
  FileCategoryUpdateFieldInput: FileCategoryUpdateFieldInput;
  FileConnectInput: FileConnectInput;
  FileConnectOrCreateWhere: FileConnectOrCreateWhere;
  FileConnectWhere: FileConnectWhere;
  FileCreateInput: FileCreateInput;
  FileDeleteInput: FileDeleteInput;
  FileDisconnectInput: FileDisconnectInput;
  FileEdge: FileEdge;
  FileFolderAggregateInput: FileFolderAggregateInput;
  FileFolderConnectFieldInput: FileFolderConnectFieldInput;
  FileFolderConnection: FileFolderConnection;
  FileFolderConnectionSort: FileFolderConnectionSort;
  FileFolderConnectionWhere: FileFolderConnectionWhere;
  FileFolderCreateFieldInput: FileFolderCreateFieldInput;
  FileFolderDeleteFieldInput: FileFolderDeleteFieldInput;
  FileFolderDisconnectFieldInput: FileFolderDisconnectFieldInput;
  FileFolderFieldInput: FileFolderFieldInput;
  FileFolderFolderAggregationSelection: FileFolderFolderAggregationSelection;
  FileFolderFolderNodeAggregateSelection: FileFolderFolderNodeAggregateSelection;
  FileFolderNodeAggregationWhereInput: FileFolderNodeAggregationWhereInput;
  FileFolderRelationship: FileFolderRelationship;
  FileFolderUpdateConnectionInput: FileFolderUpdateConnectionInput;
  FileFolderUpdateFieldInput: FileFolderUpdateFieldInput;
  FileOnCreateInput: FileOnCreateInput;
  FileOptions: FileOptions;
  FileRelationInput: FileRelationInput;
  FileSort: FileSort;
  FileUniqueWhere: FileUniqueWhere;
  FileUpdateInput: FileUpdateInput;
  FileWhere: FileWhere;
  FilesConnection: FilesConnection;
  Float: Scalars['Float']['output'];
  Folder: Folder;
  FolderAggregateSelection: FolderAggregateSelection;
  FolderCabinetAggregateInput: FolderCabinetAggregateInput;
  FolderCabinetCabinetAggregationSelection: FolderCabinetCabinetAggregationSelection;
  FolderCabinetCabinetNodeAggregateSelection: FolderCabinetCabinetNodeAggregateSelection;
  FolderCabinetConnectFieldInput: FolderCabinetConnectFieldInput;
  FolderCabinetConnection: FolderCabinetConnection;
  FolderCabinetConnectionSort: FolderCabinetConnectionSort;
  FolderCabinetConnectionWhere: FolderCabinetConnectionWhere;
  FolderCabinetCreateFieldInput: FolderCabinetCreateFieldInput;
  FolderCabinetDeleteFieldInput: FolderCabinetDeleteFieldInput;
  FolderCabinetDisconnectFieldInput: FolderCabinetDisconnectFieldInput;
  FolderCabinetFieldInput: FolderCabinetFieldInput;
  FolderCabinetNodeAggregationWhereInput: FolderCabinetNodeAggregationWhereInput;
  FolderCabinetRelationship: FolderCabinetRelationship;
  FolderCabinetUpdateConnectionInput: FolderCabinetUpdateConnectionInput;
  FolderCabinetUpdateFieldInput: FolderCabinetUpdateFieldInput;
  FolderCategoriesAggregateInput: FolderCategoriesAggregateInput;
  FolderCategoriesConnectFieldInput: FolderCategoriesConnectFieldInput;
  FolderCategoriesConnection: FolderCategoriesConnection;
  FolderCategoriesConnectionSort: FolderCategoriesConnectionSort;
  FolderCategoriesConnectionWhere: FolderCategoriesConnectionWhere;
  FolderCategoriesCreateFieldInput: FolderCategoriesCreateFieldInput;
  FolderCategoriesDeleteFieldInput: FolderCategoriesDeleteFieldInput;
  FolderCategoriesDisconnectFieldInput: FolderCategoriesDisconnectFieldInput;
  FolderCategoriesFieldInput: FolderCategoriesFieldInput;
  FolderCategoriesNodeAggregationWhereInput: FolderCategoriesNodeAggregationWhereInput;
  FolderCategoriesRelationship: FolderCategoriesRelationship;
  FolderCategoriesUpdateConnectionInput: FolderCategoriesUpdateConnectionInput;
  FolderCategoriesUpdateFieldInput: FolderCategoriesUpdateFieldInput;
  FolderCategoryCategoriesAggregationSelection: FolderCategoryCategoriesAggregationSelection;
  FolderCategoryCategoriesEdgeAggregateSelection: FolderCategoryCategoriesEdgeAggregateSelection;
  FolderCategoryCategoriesNodeAggregateSelection: FolderCategoryCategoriesNodeAggregateSelection;
  FolderConnectInput: FolderConnectInput;
  FolderConnectOrCreateInput: FolderConnectOrCreateInput;
  FolderConnectWhere: FolderConnectWhere;
  FolderCreateInput: FolderCreateInput;
  FolderDeleteInput: FolderDeleteInput;
  FolderDisconnectInput: FolderDisconnectInput;
  FolderEdge: FolderEdge;
  FolderFileFilesAggregationSelection: FolderFileFilesAggregationSelection;
  FolderFileFilesNodeAggregateSelection: FolderFileFilesNodeAggregateSelection;
  FolderFilesAggregateInput: FolderFilesAggregateInput;
  FolderFilesConnectFieldInput: FolderFilesConnectFieldInput;
  FolderFilesConnectOrCreateFieldInput: FolderFilesConnectOrCreateFieldInput;
  FolderFilesConnectOrCreateFieldInputOnCreate: FolderFilesConnectOrCreateFieldInputOnCreate;
  FolderFilesConnection: FolderFilesConnection;
  FolderFilesConnectionSort: FolderFilesConnectionSort;
  FolderFilesConnectionWhere: FolderFilesConnectionWhere;
  FolderFilesCreateFieldInput: FolderFilesCreateFieldInput;
  FolderFilesDeleteFieldInput: FolderFilesDeleteFieldInput;
  FolderFilesDisconnectFieldInput: FolderFilesDisconnectFieldInput;
  FolderFilesFieldInput: FolderFilesFieldInput;
  FolderFilesNodeAggregationWhereInput: FolderFilesNodeAggregationWhereInput;
  FolderFilesRelationship: FolderFilesRelationship;
  FolderFilesUpdateConnectionInput: FolderFilesUpdateConnectionInput;
  FolderFilesUpdateFieldInput: FolderFilesUpdateFieldInput;
  FolderOptions: FolderOptions;
  FolderRelationInput: FolderRelationInput;
  FolderSort: FolderSort;
  FolderUpdateInput: FolderUpdateInput;
  FolderWhere: FolderWhere;
  FoldersConnection: FoldersConnection;
  ID: Scalars['ID']['output'];
  IDAggregateSelection: IdAggregateSelection;
  Int: Scalars['Int']['output'];
  Me: Me;
  MeAggregateSelection: MeAggregateSelection;
  MeCreateInput: MeCreateInput;
  MeEdge: MeEdge;
  MeOptions: MeOptions;
  MeSort: MeSort;
  MeUpdateInput: MeUpdateInput;
  MeWhere: MeWhere;
  Mutation: {};
  PageInfo: PageInfo;
  Query: {};
  String: Scalars['String']['output'];
  StringAggregateSelection: StringAggregateSelection;
  UpdateCabinetsMutationResponse: UpdateCabinetsMutationResponse;
  UpdateCategoriesMutationResponse: UpdateCategoriesMutationResponse;
  UpdateFilesMutationResponse: UpdateFilesMutationResponse;
  UpdateFoldersMutationResponse: UpdateFoldersMutationResponse;
  UpdateInfo: UpdateInfo;
  UpdateUsMutationResponse: UpdateUsMutationResponse;
  UpdateUsersMutationResponse: UpdateUsersMutationResponse;
  UsConnection: UsConnection;
  User: User;
  UserAggregateSelection: UserAggregateSelection;
  UserCabinetCabinetsAggregationSelection: UserCabinetCabinetsAggregationSelection;
  UserCabinetCabinetsNodeAggregateSelection: UserCabinetCabinetsNodeAggregateSelection;
  UserCabinetsAggregateInput: UserCabinetsAggregateInput;
  UserCabinetsConnectFieldInput: UserCabinetsConnectFieldInput;
  UserCabinetsConnection: UserCabinetsConnection;
  UserCabinetsConnectionSort: UserCabinetsConnectionSort;
  UserCabinetsConnectionWhere: UserCabinetsConnectionWhere;
  UserCabinetsCreateFieldInput: UserCabinetsCreateFieldInput;
  UserCabinetsDeleteFieldInput: UserCabinetsDeleteFieldInput;
  UserCabinetsDisconnectFieldInput: UserCabinetsDisconnectFieldInput;
  UserCabinetsFieldInput: UserCabinetsFieldInput;
  UserCabinetsNodeAggregationWhereInput: UserCabinetsNodeAggregationWhereInput;
  UserCabinetsRelationship: UserCabinetsRelationship;
  UserCabinetsUpdateConnectionInput: UserCabinetsUpdateConnectionInput;
  UserCabinetsUpdateFieldInput: UserCabinetsUpdateFieldInput;
  UserConnectInput: UserConnectInput;
  UserConnectWhere: UserConnectWhere;
  UserCreateInput: UserCreateInput;
  UserDeleteInput: UserDeleteInput;
  UserDisconnectInput: UserDisconnectInput;
  UserEdge: UserEdge;
  UserOptions: UserOptions;
  UserRelationInput: UserRelationInput;
  UserSort: UserSort;
  UserUpdateInput: UserUpdateInput;
  UserWhere: UserWhere;
  UsersConnection: UsersConnection;
};

export type CabinetResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Cabinet'] = ResolversParentTypes['Cabinet']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<CabinetCategoriesArgs, 'directed'>>;
  categoriesAggregate?: Resolver<Maybe<ResolversTypes['CabinetCategoryCategoriesAggregationSelection']>, ParentType, ContextType, RequireFields<CabinetCategoriesAggregateArgs, 'directed'>>;
  categoriesConnection?: Resolver<ResolversTypes['CabinetCategoriesConnection'], ParentType, ContextType, RequireFields<CabinetCategoriesConnectionArgs, 'directed'>>;
  folders?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType, RequireFields<CabinetFoldersArgs, 'directed'>>;
  foldersAggregate?: Resolver<Maybe<ResolversTypes['CabinetFolderFoldersAggregationSelection']>, ParentType, ContextType, RequireFields<CabinetFoldersAggregateArgs, 'directed'>>;
  foldersConnection?: Resolver<ResolversTypes['CabinetFoldersConnection'], ParentType, ContextType, RequireFields<CabinetFoldersConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<CabinetUserArgs, 'directed'>>;
  userAggregate?: Resolver<Maybe<ResolversTypes['CabinetUserUserAggregationSelection']>, ParentType, ContextType, RequireFields<CabinetUserAggregateArgs, 'directed'>>;
  userConnection?: Resolver<ResolversTypes['CabinetUserConnection'], ParentType, ContextType, RequireFields<CabinetUserConnectionArgs, 'directed'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetAggregateSelection'] = ResolversParentTypes['CabinetAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetCategoriesConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetCategoriesConnection'] = ResolversParentTypes['CabinetCategoriesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CabinetCategoriesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetCategoriesRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetCategoriesRelationship'] = ResolversParentTypes['CabinetCategoriesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetCategoryCategoriesAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetCategoryCategoriesAggregationSelection'] = ResolversParentTypes['CabinetCategoryCategoriesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CabinetCategoryCategoriesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetCategoryCategoriesNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetCategoryCategoriesNodeAggregateSelection'] = ResolversParentTypes['CabinetCategoryCategoriesNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetEdge'] = ResolversParentTypes['CabinetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Cabinet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetFolderFoldersAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetFolderFoldersAggregationSelection'] = ResolversParentTypes['CabinetFolderFoldersAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CabinetFolderFoldersNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetFolderFoldersNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetFolderFoldersNodeAggregateSelection'] = ResolversParentTypes['CabinetFolderFoldersNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetFoldersConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetFoldersConnection'] = ResolversParentTypes['CabinetFoldersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CabinetFoldersRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetFoldersRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetFoldersRelationship'] = ResolversParentTypes['CabinetFoldersRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Folder'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetUserConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetUserConnection'] = ResolversParentTypes['CabinetUserConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CabinetUserRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetUserRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetUserRelationship'] = ResolversParentTypes['CabinetUserRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetUserUserAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetUserUserAggregationSelection'] = ResolversParentTypes['CabinetUserUserAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CabinetUserUserNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetUserUserNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetUserUserNodeAggregateSelection'] = ResolversParentTypes['CabinetUserUserNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinetsConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CabinetsConnection'] = ResolversParentTypes['CabinetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CabinetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoriesConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoriesConnection'] = ResolversParentTypes['CategoriesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CategoryEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  cabinet?: Resolver<ResolversTypes['Cabinet'], ParentType, ContextType, RequireFields<CategoryCabinetArgs, 'directed'>>;
  cabinetAggregate?: Resolver<Maybe<ResolversTypes['CategoryCabinetCabinetAggregationSelection']>, ParentType, ContextType, RequireFields<CategoryCabinetAggregateArgs, 'directed'>>;
  cabinetConnection?: Resolver<ResolversTypes['CategoryCabinetConnection'], ParentType, ContextType, RequireFields<CategoryCabinetConnectionArgs, 'directed'>>;
  files?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType, RequireFields<CategoryFilesArgs, 'directed'>>;
  filesAggregate?: Resolver<Maybe<ResolversTypes['CategoryFileFilesAggregationSelection']>, ParentType, ContextType, RequireFields<CategoryFilesAggregateArgs, 'directed'>>;
  filesConnection?: Resolver<ResolversTypes['CategoryFilesConnection'], ParentType, ContextType, RequireFields<CategoryFilesConnectionArgs, 'directed'>>;
  folder?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType, RequireFields<CategoryFolderArgs, 'directed'>>;
  folderAggregate?: Resolver<Maybe<ResolversTypes['CategoryFolderFolderAggregationSelection']>, ParentType, ContextType, RequireFields<CategoryFolderAggregateArgs, 'directed'>>;
  folderConnection?: Resolver<ResolversTypes['CategoryFolderConnection'], ParentType, ContextType, RequireFields<CategoryFolderConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryAggregateSelection'] = ResolversParentTypes['CategoryAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryCabinetCabinetAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryCabinetCabinetAggregationSelection'] = ResolversParentTypes['CategoryCabinetCabinetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CategoryCabinetCabinetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryCabinetCabinetNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryCabinetCabinetNodeAggregateSelection'] = ResolversParentTypes['CategoryCabinetCabinetNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryCabinetConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryCabinetConnection'] = ResolversParentTypes['CategoryCabinetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CategoryCabinetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryCabinetRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryCabinetRelationship'] = ResolversParentTypes['CategoryCabinetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Cabinet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryEdge'] = ResolversParentTypes['CategoryEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryFileFilesAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryFileFilesAggregationSelection'] = ResolversParentTypes['CategoryFileFilesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CategoryFileFilesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryFileFilesNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryFileFilesNodeAggregateSelection'] = ResolversParentTypes['CategoryFileFilesNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryFilesConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryFilesConnection'] = ResolversParentTypes['CategoryFilesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CategoryFilesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryFilesRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryFilesRelationship'] = ResolversParentTypes['CategoryFilesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryFolderConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryFolderConnection'] = ResolversParentTypes['CategoryFolderConnection']> = {
  edges?: Resolver<Array<ResolversTypes['CategoryFolderRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryFolderFolderAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryFolderFolderAggregationSelection'] = ResolversParentTypes['CategoryFolderFolderAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edge?: Resolver<Maybe<ResolversTypes['CategoryFolderFolderEdgeAggregateSelection']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['CategoryFolderFolderNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryFolderFolderEdgeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryFolderFolderEdgeAggregateSelection'] = ResolversParentTypes['CategoryFolderFolderEdgeAggregateSelection']> = {
  color?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryFolderFolderNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryFolderFolderNodeAggregateSelection'] = ResolversParentTypes['CategoryFolderFolderNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryFolderRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryFolderRelationship'] = ResolversParentTypes['CategoryFolderRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Folder'], ParentType, ContextType>;
  properties?: Resolver<ResolversTypes['ColorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorTypeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ColorType'] = ResolversParentTypes['ColorType']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCabinetsMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateCabinetsMutationResponse'] = ResolversParentTypes['CreateCabinetsMutationResponse']> = {
  cabinets?: Resolver<Array<ResolversTypes['Cabinet']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCategoriesMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateCategoriesMutationResponse'] = ResolversParentTypes['CreateCategoriesMutationResponse']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFilesMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateFilesMutationResponse'] = ResolversParentTypes['CreateFilesMutationResponse']> = {
  files?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateFoldersMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateFoldersMutationResponse'] = ResolversParentTypes['CreateFoldersMutationResponse']> = {
  folders?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateInfo'] = ResolversParentTypes['CreateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUsMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateUsMutationResponse'] = ResolversParentTypes['CreateUsMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  us?: Resolver<Array<ResolversTypes['Me']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUsersMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateUsersMutationResponse'] = ResolversParentTypes['CreateUsersMutationResponse']> = {
  info?: Resolver<ResolversTypes['CreateInfo'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeleteInfo'] = ResolversParentTypes['DeleteInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<FileCategoryArgs, 'directed'>>;
  categoryAggregate?: Resolver<Maybe<ResolversTypes['FileCategoryCategoryAggregationSelection']>, ParentType, ContextType, RequireFields<FileCategoryAggregateArgs, 'directed'>>;
  categoryConnection?: Resolver<ResolversTypes['FileCategoryConnection'], ParentType, ContextType, RequireFields<FileCategoryConnectionArgs, 'directed'>>;
  folder?: Resolver<ResolversTypes['Folder'], ParentType, ContextType, RequireFields<FileFolderArgs, 'directed'>>;
  folderAggregate?: Resolver<Maybe<ResolversTypes['FileFolderFolderAggregationSelection']>, ParentType, ContextType, RequireFields<FileFolderAggregateArgs, 'directed'>>;
  folderConnection?: Resolver<ResolversTypes['FileFolderConnection'], ParentType, ContextType, RequireFields<FileFolderConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FileAggregateSelection'] = ResolversParentTypes['FileAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileCategoryCategoryAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FileCategoryCategoryAggregationSelection'] = ResolversParentTypes['FileCategoryCategoryAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['FileCategoryCategoryNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileCategoryCategoryNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FileCategoryCategoryNodeAggregateSelection'] = ResolversParentTypes['FileCategoryCategoryNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileCategoryConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FileCategoryConnection'] = ResolversParentTypes['FileCategoryConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FileCategoryRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileCategoryRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FileCategoryRelationship'] = ResolversParentTypes['FileCategoryRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FileEdge'] = ResolversParentTypes['FileEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileFolderConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FileFolderConnection'] = ResolversParentTypes['FileFolderConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FileFolderRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileFolderFolderAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FileFolderFolderAggregationSelection'] = ResolversParentTypes['FileFolderFolderAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['FileFolderFolderNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileFolderFolderNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FileFolderFolderNodeAggregateSelection'] = ResolversParentTypes['FileFolderFolderNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileFolderRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FileFolderRelationship'] = ResolversParentTypes['FileFolderRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Folder'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilesConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FilesConnection'] = ResolversParentTypes['FilesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Folder'] = ResolversParentTypes['Folder']> = {
  cabinet?: Resolver<ResolversTypes['Cabinet'], ParentType, ContextType, RequireFields<FolderCabinetArgs, 'directed'>>;
  cabinetAggregate?: Resolver<Maybe<ResolversTypes['FolderCabinetCabinetAggregationSelection']>, ParentType, ContextType, RequireFields<FolderCabinetAggregateArgs, 'directed'>>;
  cabinetConnection?: Resolver<ResolversTypes['FolderCabinetConnection'], ParentType, ContextType, RequireFields<FolderCabinetConnectionArgs, 'directed'>>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<FolderCategoriesArgs, 'directed'>>;
  categoriesAggregate?: Resolver<Maybe<ResolversTypes['FolderCategoryCategoriesAggregationSelection']>, ParentType, ContextType, RequireFields<FolderCategoriesAggregateArgs, 'directed'>>;
  categoriesConnection?: Resolver<ResolversTypes['FolderCategoriesConnection'], ParentType, ContextType, RequireFields<FolderCategoriesConnectionArgs, 'directed'>>;
  files?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType, RequireFields<FolderFilesArgs, 'directed'>>;
  filesAggregate?: Resolver<Maybe<ResolversTypes['FolderFileFilesAggregationSelection']>, ParentType, ContextType, RequireFields<FolderFilesAggregateArgs, 'directed'>>;
  filesConnection?: Resolver<ResolversTypes['FolderFilesConnection'], ParentType, ContextType, RequireFields<FolderFilesConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderAggregateSelection'] = ResolversParentTypes['FolderAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderCabinetCabinetAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderCabinetCabinetAggregationSelection'] = ResolversParentTypes['FolderCabinetCabinetAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['FolderCabinetCabinetNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderCabinetCabinetNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderCabinetCabinetNodeAggregateSelection'] = ResolversParentTypes['FolderCabinetCabinetNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderCabinetConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderCabinetConnection'] = ResolversParentTypes['FolderCabinetConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderCabinetRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderCabinetRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderCabinetRelationship'] = ResolversParentTypes['FolderCabinetRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Cabinet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderCategoriesConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderCategoriesConnection'] = ResolversParentTypes['FolderCategoriesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderCategoriesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderCategoriesRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderCategoriesRelationship'] = ResolversParentTypes['FolderCategoriesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  properties?: Resolver<ResolversTypes['ColorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderCategoryCategoriesAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderCategoryCategoriesAggregationSelection'] = ResolversParentTypes['FolderCategoryCategoriesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edge?: Resolver<Maybe<ResolversTypes['FolderCategoryCategoriesEdgeAggregateSelection']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['FolderCategoryCategoriesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderCategoryCategoriesEdgeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderCategoryCategoriesEdgeAggregateSelection'] = ResolversParentTypes['FolderCategoryCategoriesEdgeAggregateSelection']> = {
  color?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderCategoryCategoriesNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderCategoryCategoriesNodeAggregateSelection'] = ResolversParentTypes['FolderCategoryCategoriesNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderEdge'] = ResolversParentTypes['FolderEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Folder'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderFileFilesAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderFileFilesAggregationSelection'] = ResolversParentTypes['FolderFileFilesAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['FolderFileFilesNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderFileFilesNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderFileFilesNodeAggregateSelection'] = ResolversParentTypes['FolderFileFilesNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderFilesConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderFilesConnection'] = ResolversParentTypes['FolderFilesConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderFilesRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FolderFilesRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FolderFilesRelationship'] = ResolversParentTypes['FolderFilesRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FoldersConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FoldersConnection'] = ResolversParentTypes['FoldersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['FolderEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IDAggregateSelection'] = ResolversParentTypes['IDAggregateSelection']> = {
  longest?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  shortest?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = {
  myId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MeAggregateSelection'] = ResolversParentTypes['MeAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  myId?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MeEdge'] = ResolversParentTypes['MeEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Me'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCabinets?: Resolver<ResolversTypes['CreateCabinetsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCabinetsArgs, 'input'>>;
  createCategories?: Resolver<ResolversTypes['CreateCategoriesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateCategoriesArgs, 'input'>>;
  createFiles?: Resolver<ResolversTypes['CreateFilesMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateFilesArgs, 'input'>>;
  createFolders?: Resolver<ResolversTypes['CreateFoldersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateFoldersArgs, 'input'>>;
  createUs?: Resolver<ResolversTypes['CreateUsMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateUsArgs, 'input'>>;
  createUsers?: Resolver<ResolversTypes['CreateUsersMutationResponse'], ParentType, ContextType, RequireFields<MutationCreateUsersArgs, 'input'>>;
  deleteCabinets?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCabinetsArgs>>;
  deleteCategories?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteCategoriesArgs>>;
  deleteFiles?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteFilesArgs>>;
  deleteFolders?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteFoldersArgs>>;
  deleteUs?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteUsArgs>>;
  deleteUsers?: Resolver<ResolversTypes['DeleteInfo'], ParentType, ContextType, Partial<MutationDeleteUsersArgs>>;
  updateCabinets?: Resolver<ResolversTypes['UpdateCabinetsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCabinetsArgs>>;
  updateCategories?: Resolver<ResolversTypes['UpdateCategoriesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateCategoriesArgs>>;
  updateFiles?: Resolver<ResolversTypes['UpdateFilesMutationResponse'], ParentType, ContextType, Partial<MutationUpdateFilesArgs>>;
  updateFolders?: Resolver<ResolversTypes['UpdateFoldersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateFoldersArgs>>;
  updateUs?: Resolver<ResolversTypes['UpdateUsMutationResponse'], ParentType, ContextType, Partial<MutationUpdateUsArgs>>;
  updateUsers?: Resolver<ResolversTypes['UpdateUsersMutationResponse'], ParentType, ContextType, Partial<MutationUpdateUsersArgs>>;
};

export type PageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cabinets?: Resolver<Array<ResolversTypes['Cabinet']>, ParentType, ContextType, Partial<QueryCabinetsArgs>>;
  cabinetsAggregate?: Resolver<ResolversTypes['CabinetAggregateSelection'], ParentType, ContextType, Partial<QueryCabinetsAggregateArgs>>;
  cabinetsConnection?: Resolver<ResolversTypes['CabinetsConnection'], ParentType, ContextType, Partial<QueryCabinetsConnectionArgs>>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, Partial<QueryCategoriesArgs>>;
  categoriesAggregate?: Resolver<ResolversTypes['CategoryAggregateSelection'], ParentType, ContextType, Partial<QueryCategoriesAggregateArgs>>;
  categoriesConnection?: Resolver<ResolversTypes['CategoriesConnection'], ParentType, ContextType, Partial<QueryCategoriesConnectionArgs>>;
  files?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType, Partial<QueryFilesArgs>>;
  filesAggregate?: Resolver<ResolversTypes['FileAggregateSelection'], ParentType, ContextType, Partial<QueryFilesAggregateArgs>>;
  filesConnection?: Resolver<ResolversTypes['FilesConnection'], ParentType, ContextType, Partial<QueryFilesConnectionArgs>>;
  folders?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType, Partial<QueryFoldersArgs>>;
  foldersAggregate?: Resolver<ResolversTypes['FolderAggregateSelection'], ParentType, ContextType, Partial<QueryFoldersAggregateArgs>>;
  foldersConnection?: Resolver<ResolversTypes['FoldersConnection'], ParentType, ContextType, Partial<QueryFoldersConnectionArgs>>;
  me?: Resolver<ResolversTypes['Me'], ParentType, ContextType>;
  us?: Resolver<Array<ResolversTypes['Me']>, ParentType, ContextType, Partial<QueryUsArgs>>;
  usAggregate?: Resolver<ResolversTypes['MeAggregateSelection'], ParentType, ContextType, Partial<QueryUsAggregateArgs>>;
  usConnection?: Resolver<ResolversTypes['UsConnection'], ParentType, ContextType, Partial<QueryUsConnectionArgs>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
  usersAggregate?: Resolver<ResolversTypes['UserAggregateSelection'], ParentType, ContextType, Partial<QueryUsersAggregateArgs>>;
  usersConnection?: Resolver<ResolversTypes['UsersConnection'], ParentType, ContextType, Partial<QueryUsersConnectionArgs>>;
};

export type StringAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StringAggregateSelection'] = ResolversParentTypes['StringAggregateSelection']> = {
  longest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortest?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCabinetsMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdateCabinetsMutationResponse'] = ResolversParentTypes['UpdateCabinetsMutationResponse']> = {
  cabinets?: Resolver<Array<ResolversTypes['Cabinet']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCategoriesMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdateCategoriesMutationResponse'] = ResolversParentTypes['UpdateCategoriesMutationResponse']> = {
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateFilesMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdateFilesMutationResponse'] = ResolversParentTypes['UpdateFilesMutationResponse']> = {
  files?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateFoldersMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdateFoldersMutationResponse'] = ResolversParentTypes['UpdateFoldersMutationResponse']> = {
  folders?: Resolver<Array<ResolversTypes['Folder']>, ParentType, ContextType>;
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdateInfo'] = ResolversParentTypes['UpdateInfo']> = {
  bookmark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nodesCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nodesDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  relationshipsDeleted?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUsMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdateUsMutationResponse'] = ResolversParentTypes['UpdateUsMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  us?: Resolver<Array<ResolversTypes['Me']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUsersMutationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdateUsersMutationResponse'] = ResolversParentTypes['UpdateUsersMutationResponse']> = {
  info?: Resolver<ResolversTypes['UpdateInfo'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UsConnection'] = ResolversParentTypes['UsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['MeEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  cabinets?: Resolver<Array<ResolversTypes['Cabinet']>, ParentType, ContextType, RequireFields<UserCabinetsArgs, 'directed'>>;
  cabinetsAggregate?: Resolver<Maybe<ResolversTypes['UserCabinetCabinetsAggregationSelection']>, ParentType, ContextType, RequireFields<UserCabinetsAggregateArgs, 'directed'>>;
  cabinetsConnection?: Resolver<ResolversTypes['UserCabinetsConnection'], ParentType, ContextType, RequireFields<UserCabinetsConnectionArgs, 'directed'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserAggregateSelection'] = ResolversParentTypes['UserAggregateSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCabinetCabinetsAggregationSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserCabinetCabinetsAggregationSelection'] = ResolversParentTypes['UserCabinetCabinetsAggregationSelection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UserCabinetCabinetsNodeAggregateSelection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCabinetCabinetsNodeAggregateSelectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserCabinetCabinetsNodeAggregateSelection'] = ResolversParentTypes['UserCabinetCabinetsNodeAggregateSelection']> = {
  id?: Resolver<ResolversTypes['IDAggregateSelection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['StringAggregateSelection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCabinetsConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserCabinetsConnection'] = ResolversParentTypes['UserCabinetsConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserCabinetsRelationship']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCabinetsRelationshipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserCabinetsRelationship'] = ResolversParentTypes['UserCabinetsRelationship']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Cabinet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Cabinet?: CabinetResolvers<ContextType>;
  CabinetAggregateSelection?: CabinetAggregateSelectionResolvers<ContextType>;
  CabinetCategoriesConnection?: CabinetCategoriesConnectionResolvers<ContextType>;
  CabinetCategoriesRelationship?: CabinetCategoriesRelationshipResolvers<ContextType>;
  CabinetCategoryCategoriesAggregationSelection?: CabinetCategoryCategoriesAggregationSelectionResolvers<ContextType>;
  CabinetCategoryCategoriesNodeAggregateSelection?: CabinetCategoryCategoriesNodeAggregateSelectionResolvers<ContextType>;
  CabinetEdge?: CabinetEdgeResolvers<ContextType>;
  CabinetFolderFoldersAggregationSelection?: CabinetFolderFoldersAggregationSelectionResolvers<ContextType>;
  CabinetFolderFoldersNodeAggregateSelection?: CabinetFolderFoldersNodeAggregateSelectionResolvers<ContextType>;
  CabinetFoldersConnection?: CabinetFoldersConnectionResolvers<ContextType>;
  CabinetFoldersRelationship?: CabinetFoldersRelationshipResolvers<ContextType>;
  CabinetUserConnection?: CabinetUserConnectionResolvers<ContextType>;
  CabinetUserRelationship?: CabinetUserRelationshipResolvers<ContextType>;
  CabinetUserUserAggregationSelection?: CabinetUserUserAggregationSelectionResolvers<ContextType>;
  CabinetUserUserNodeAggregateSelection?: CabinetUserUserNodeAggregateSelectionResolvers<ContextType>;
  CabinetsConnection?: CabinetsConnectionResolvers<ContextType>;
  CategoriesConnection?: CategoriesConnectionResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryAggregateSelection?: CategoryAggregateSelectionResolvers<ContextType>;
  CategoryCabinetCabinetAggregationSelection?: CategoryCabinetCabinetAggregationSelectionResolvers<ContextType>;
  CategoryCabinetCabinetNodeAggregateSelection?: CategoryCabinetCabinetNodeAggregateSelectionResolvers<ContextType>;
  CategoryCabinetConnection?: CategoryCabinetConnectionResolvers<ContextType>;
  CategoryCabinetRelationship?: CategoryCabinetRelationshipResolvers<ContextType>;
  CategoryEdge?: CategoryEdgeResolvers<ContextType>;
  CategoryFileFilesAggregationSelection?: CategoryFileFilesAggregationSelectionResolvers<ContextType>;
  CategoryFileFilesNodeAggregateSelection?: CategoryFileFilesNodeAggregateSelectionResolvers<ContextType>;
  CategoryFilesConnection?: CategoryFilesConnectionResolvers<ContextType>;
  CategoryFilesRelationship?: CategoryFilesRelationshipResolvers<ContextType>;
  CategoryFolderConnection?: CategoryFolderConnectionResolvers<ContextType>;
  CategoryFolderFolderAggregationSelection?: CategoryFolderFolderAggregationSelectionResolvers<ContextType>;
  CategoryFolderFolderEdgeAggregateSelection?: CategoryFolderFolderEdgeAggregateSelectionResolvers<ContextType>;
  CategoryFolderFolderNodeAggregateSelection?: CategoryFolderFolderNodeAggregateSelectionResolvers<ContextType>;
  CategoryFolderRelationship?: CategoryFolderRelationshipResolvers<ContextType>;
  ColorType?: ColorTypeResolvers<ContextType>;
  CreateCabinetsMutationResponse?: CreateCabinetsMutationResponseResolvers<ContextType>;
  CreateCategoriesMutationResponse?: CreateCategoriesMutationResponseResolvers<ContextType>;
  CreateFilesMutationResponse?: CreateFilesMutationResponseResolvers<ContextType>;
  CreateFoldersMutationResponse?: CreateFoldersMutationResponseResolvers<ContextType>;
  CreateInfo?: CreateInfoResolvers<ContextType>;
  CreateUsMutationResponse?: CreateUsMutationResponseResolvers<ContextType>;
  CreateUsersMutationResponse?: CreateUsersMutationResponseResolvers<ContextType>;
  DeleteInfo?: DeleteInfoResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FileAggregateSelection?: FileAggregateSelectionResolvers<ContextType>;
  FileCategoryCategoryAggregationSelection?: FileCategoryCategoryAggregationSelectionResolvers<ContextType>;
  FileCategoryCategoryNodeAggregateSelection?: FileCategoryCategoryNodeAggregateSelectionResolvers<ContextType>;
  FileCategoryConnection?: FileCategoryConnectionResolvers<ContextType>;
  FileCategoryRelationship?: FileCategoryRelationshipResolvers<ContextType>;
  FileEdge?: FileEdgeResolvers<ContextType>;
  FileFolderConnection?: FileFolderConnectionResolvers<ContextType>;
  FileFolderFolderAggregationSelection?: FileFolderFolderAggregationSelectionResolvers<ContextType>;
  FileFolderFolderNodeAggregateSelection?: FileFolderFolderNodeAggregateSelectionResolvers<ContextType>;
  FileFolderRelationship?: FileFolderRelationshipResolvers<ContextType>;
  FilesConnection?: FilesConnectionResolvers<ContextType>;
  Folder?: FolderResolvers<ContextType>;
  FolderAggregateSelection?: FolderAggregateSelectionResolvers<ContextType>;
  FolderCabinetCabinetAggregationSelection?: FolderCabinetCabinetAggregationSelectionResolvers<ContextType>;
  FolderCabinetCabinetNodeAggregateSelection?: FolderCabinetCabinetNodeAggregateSelectionResolvers<ContextType>;
  FolderCabinetConnection?: FolderCabinetConnectionResolvers<ContextType>;
  FolderCabinetRelationship?: FolderCabinetRelationshipResolvers<ContextType>;
  FolderCategoriesConnection?: FolderCategoriesConnectionResolvers<ContextType>;
  FolderCategoriesRelationship?: FolderCategoriesRelationshipResolvers<ContextType>;
  FolderCategoryCategoriesAggregationSelection?: FolderCategoryCategoriesAggregationSelectionResolvers<ContextType>;
  FolderCategoryCategoriesEdgeAggregateSelection?: FolderCategoryCategoriesEdgeAggregateSelectionResolvers<ContextType>;
  FolderCategoryCategoriesNodeAggregateSelection?: FolderCategoryCategoriesNodeAggregateSelectionResolvers<ContextType>;
  FolderEdge?: FolderEdgeResolvers<ContextType>;
  FolderFileFilesAggregationSelection?: FolderFileFilesAggregationSelectionResolvers<ContextType>;
  FolderFileFilesNodeAggregateSelection?: FolderFileFilesNodeAggregateSelectionResolvers<ContextType>;
  FolderFilesConnection?: FolderFilesConnectionResolvers<ContextType>;
  FolderFilesRelationship?: FolderFilesRelationshipResolvers<ContextType>;
  FoldersConnection?: FoldersConnectionResolvers<ContextType>;
  IDAggregateSelection?: IdAggregateSelectionResolvers<ContextType>;
  Me?: MeResolvers<ContextType>;
  MeAggregateSelection?: MeAggregateSelectionResolvers<ContextType>;
  MeEdge?: MeEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StringAggregateSelection?: StringAggregateSelectionResolvers<ContextType>;
  UpdateCabinetsMutationResponse?: UpdateCabinetsMutationResponseResolvers<ContextType>;
  UpdateCategoriesMutationResponse?: UpdateCategoriesMutationResponseResolvers<ContextType>;
  UpdateFilesMutationResponse?: UpdateFilesMutationResponseResolvers<ContextType>;
  UpdateFoldersMutationResponse?: UpdateFoldersMutationResponseResolvers<ContextType>;
  UpdateInfo?: UpdateInfoResolvers<ContextType>;
  UpdateUsMutationResponse?: UpdateUsMutationResponseResolvers<ContextType>;
  UpdateUsersMutationResponse?: UpdateUsersMutationResponseResolvers<ContextType>;
  UsConnection?: UsConnectionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAggregateSelection?: UserAggregateSelectionResolvers<ContextType>;
  UserCabinetCabinetsAggregationSelection?: UserCabinetCabinetsAggregationSelectionResolvers<ContextType>;
  UserCabinetCabinetsNodeAggregateSelection?: UserCabinetCabinetsNodeAggregateSelectionResolvers<ContextType>;
  UserCabinetsConnection?: UserCabinetsConnectionResolvers<ContextType>;
  UserCabinetsRelationship?: UserCabinetsRelationshipResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
};

