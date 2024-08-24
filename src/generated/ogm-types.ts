import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
};

export type Query = {
  __typename?: "Query";
  me: Me;
  cabinets: Array<Cabinet>;
  cabinetsConnection: CabinetsConnection;
  cabinetsAggregate: CabinetAggregateSelection;
  categories: Array<Category>;
  categoriesConnection: CategoriesConnection;
  categoriesAggregate: CategoryAggregateSelection;
  files: Array<File>;
  filesConnection: FilesConnection;
  filesAggregate: FileAggregateSelection;
  folders: Array<Folder>;
  foldersConnection: FoldersConnection;
  foldersAggregate: FolderAggregateSelection;
  us: Array<Me>;
  usConnection: UsConnection;
  usAggregate: MeAggregateSelection;
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
};

export type QueryCabinetsArgs = {
  where?: InputMaybe<CabinetWhere>;
  options?: InputMaybe<CabinetOptions>;
};

export type QueryCabinetsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<CabinetWhere>;
  sort?: InputMaybe<Array<InputMaybe<CabinetSort>>>;
};

export type QueryCabinetsAggregateArgs = {
  where?: InputMaybe<CabinetWhere>;
};

export type QueryCategoriesArgs = {
  where?: InputMaybe<CategoryWhere>;
  options?: InputMaybe<CategoryOptions>;
};

export type QueryCategoriesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<CategoryWhere>;
  sort?: InputMaybe<Array<InputMaybe<CategorySort>>>;
};

export type QueryCategoriesAggregateArgs = {
  where?: InputMaybe<CategoryWhere>;
};

export type QueryFilesArgs = {
  where?: InputMaybe<FileWhere>;
  options?: InputMaybe<FileOptions>;
};

export type QueryFilesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<FileWhere>;
  sort?: InputMaybe<Array<InputMaybe<FileSort>>>;
};

export type QueryFilesAggregateArgs = {
  where?: InputMaybe<FileWhere>;
};

export type QueryFoldersArgs = {
  where?: InputMaybe<FolderWhere>;
  options?: InputMaybe<FolderOptions>;
};

export type QueryFoldersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<FolderWhere>;
  sort?: InputMaybe<Array<InputMaybe<FolderSort>>>;
};

export type QueryFoldersAggregateArgs = {
  where?: InputMaybe<FolderWhere>;
};

export type QueryUsArgs = {
  where?: InputMaybe<MeWhere>;
  options?: InputMaybe<MeOptions>;
};

export type QueryUsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<MeWhere>;
  sort?: InputMaybe<Array<InputMaybe<MeSort>>>;
};

export type QueryUsAggregateArgs = {
  where?: InputMaybe<MeWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createCabinets: CreateCabinetsMutationResponse;
  deleteCabinets: DeleteInfo;
  updateCabinets: UpdateCabinetsMutationResponse;
  createCategories: CreateCategoriesMutationResponse;
  deleteCategories: DeleteInfo;
  updateCategories: UpdateCategoriesMutationResponse;
  createFiles: CreateFilesMutationResponse;
  deleteFiles: DeleteInfo;
  updateFiles: UpdateFilesMutationResponse;
  createFolders: CreateFoldersMutationResponse;
  deleteFolders: DeleteInfo;
  updateFolders: UpdateFoldersMutationResponse;
  createUs: CreateUsMutationResponse;
  deleteUs: DeleteInfo;
  updateUs: UpdateUsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateCabinetsArgs = {
  input: Array<CabinetCreateInput>;
};

export type MutationDeleteCabinetsArgs = {
  where?: InputMaybe<CabinetWhere>;
  delete?: InputMaybe<CabinetDeleteInput>;
};

export type MutationUpdateCabinetsArgs = {
  where?: InputMaybe<CabinetWhere>;
  update?: InputMaybe<CabinetUpdateInput>;
  connect?: InputMaybe<CabinetConnectInput>;
  disconnect?: InputMaybe<CabinetDisconnectInput>;
  create?: InputMaybe<CabinetRelationInput>;
  delete?: InputMaybe<CabinetDeleteInput>;
};

export type MutationCreateCategoriesArgs = {
  input: Array<CategoryCreateInput>;
};

export type MutationDeleteCategoriesArgs = {
  where?: InputMaybe<CategoryWhere>;
  delete?: InputMaybe<CategoryDeleteInput>;
};

export type MutationUpdateCategoriesArgs = {
  where?: InputMaybe<CategoryWhere>;
  update?: InputMaybe<CategoryUpdateInput>;
  connect?: InputMaybe<CategoryConnectInput>;
  disconnect?: InputMaybe<CategoryDisconnectInput>;
  create?: InputMaybe<CategoryRelationInput>;
  delete?: InputMaybe<CategoryDeleteInput>;
  connectOrCreate?: InputMaybe<CategoryConnectOrCreateInput>;
};

export type MutationCreateFilesArgs = {
  input: Array<FileCreateInput>;
};

export type MutationDeleteFilesArgs = {
  where?: InputMaybe<FileWhere>;
  delete?: InputMaybe<FileDeleteInput>;
};

export type MutationUpdateFilesArgs = {
  where?: InputMaybe<FileWhere>;
  update?: InputMaybe<FileUpdateInput>;
  connect?: InputMaybe<FileConnectInput>;
  disconnect?: InputMaybe<FileDisconnectInput>;
  create?: InputMaybe<FileRelationInput>;
  delete?: InputMaybe<FileDeleteInput>;
};

export type MutationCreateFoldersArgs = {
  input: Array<FolderCreateInput>;
};

export type MutationDeleteFoldersArgs = {
  where?: InputMaybe<FolderWhere>;
  delete?: InputMaybe<FolderDeleteInput>;
};

export type MutationUpdateFoldersArgs = {
  where?: InputMaybe<FolderWhere>;
  update?: InputMaybe<FolderUpdateInput>;
  connect?: InputMaybe<FolderConnectInput>;
  disconnect?: InputMaybe<FolderDisconnectInput>;
  create?: InputMaybe<FolderRelationInput>;
  delete?: InputMaybe<FolderDeleteInput>;
  connectOrCreate?: InputMaybe<FolderConnectOrCreateInput>;
};

export type MutationCreateUsArgs = {
  input: Array<MeCreateInput>;
};

export type MutationDeleteUsArgs = {
  where?: InputMaybe<MeWhere>;
};

export type MutationUpdateUsArgs = {
  where?: InputMaybe<MeWhere>;
  update?: InputMaybe<MeUpdateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type Cabinet = {
  __typename?: "Cabinet";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  foldersAggregate?: Maybe<CabinetFolderFoldersAggregationSelection>;
  folders: Array<Folder>;
  foldersConnection: CabinetFoldersConnection;
  categoriesAggregate?: Maybe<CabinetCategoryCategoriesAggregationSelection>;
  categories: Array<Category>;
  categoriesConnection: CabinetCategoriesConnection;
  userAggregate?: Maybe<CabinetUserUserAggregationSelection>;
  user: User;
  userConnection: CabinetUserConnection;
};

export type CabinetFoldersAggregateArgs = {
  where?: InputMaybe<FolderWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CabinetFoldersArgs = {
  where?: InputMaybe<FolderWhere>;
  options?: InputMaybe<FolderOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CabinetFoldersConnectionArgs = {
  where?: InputMaybe<CabinetFoldersConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CabinetFoldersConnectionSort>>;
};

export type CabinetCategoriesAggregateArgs = {
  where?: InputMaybe<CategoryWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CabinetCategoriesArgs = {
  where?: InputMaybe<CategoryWhere>;
  options?: InputMaybe<CategoryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CabinetCategoriesConnectionArgs = {
  where?: InputMaybe<CabinetCategoriesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CabinetCategoriesConnectionSort>>;
};

export type CabinetUserAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CabinetUserArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CabinetUserConnectionArgs = {
  where?: InputMaybe<CabinetUserConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CabinetUserConnectionSort>>;
};

export type CabinetAggregateSelection = {
  __typename?: "CabinetAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CabinetCategoriesConnection = {
  __typename?: "CabinetCategoriesConnection";
  edges: Array<CabinetCategoriesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CabinetCategoriesRelationship = {
  __typename?: "CabinetCategoriesRelationship";
  cursor: Scalars["String"]["output"];
  node: Category;
};

export type CabinetCategoryCategoriesAggregationSelection = {
  __typename?: "CabinetCategoryCategoriesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CabinetCategoryCategoriesNodeAggregateSelection>;
};

export type CabinetCategoryCategoriesNodeAggregateSelection = {
  __typename?: "CabinetCategoryCategoriesNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CabinetEdge = {
  __typename?: "CabinetEdge";
  cursor: Scalars["String"]["output"];
  node: Cabinet;
};

export type CabinetFolderFoldersAggregationSelection = {
  __typename?: "CabinetFolderFoldersAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CabinetFolderFoldersNodeAggregateSelection>;
};

export type CabinetFolderFoldersNodeAggregateSelection = {
  __typename?: "CabinetFolderFoldersNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CabinetFoldersConnection = {
  __typename?: "CabinetFoldersConnection";
  edges: Array<CabinetFoldersRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CabinetFoldersRelationship = {
  __typename?: "CabinetFoldersRelationship";
  cursor: Scalars["String"]["output"];
  node: Folder;
};

export type CabinetsConnection = {
  __typename?: "CabinetsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<CabinetEdge>;
};

export type CabinetUserConnection = {
  __typename?: "CabinetUserConnection";
  edges: Array<CabinetUserRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CabinetUserRelationship = {
  __typename?: "CabinetUserRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type CabinetUserUserAggregationSelection = {
  __typename?: "CabinetUserUserAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CabinetUserUserNodeAggregateSelection>;
};

export type CabinetUserUserNodeAggregateSelection = {
  __typename?: "CabinetUserUserNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CategoriesConnection = {
  __typename?: "CategoriesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<CategoryEdge>;
};

export type Category = {
  __typename?: "Category";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  filesAggregate?: Maybe<CategoryFileFilesAggregationSelection>;
  files: Array<File>;
  filesConnection: CategoryFilesConnection;
  folderAggregate?: Maybe<CategoryFolderFolderAggregationSelection>;
  folder: Array<Folder>;
  folderConnection: CategoryFolderConnection;
  cabinetAggregate?: Maybe<CategoryCabinetCabinetAggregationSelection>;
  cabinet: Cabinet;
  cabinetConnection: CategoryCabinetConnection;
};

export type CategoryFilesAggregateArgs = {
  where?: InputMaybe<FileWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CategoryFilesArgs = {
  where?: InputMaybe<FileWhere>;
  options?: InputMaybe<FileOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CategoryFilesConnectionArgs = {
  where?: InputMaybe<CategoryFilesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CategoryFilesConnectionSort>>;
};

export type CategoryFolderAggregateArgs = {
  where?: InputMaybe<FolderWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CategoryFolderArgs = {
  where?: InputMaybe<FolderWhere>;
  options?: InputMaybe<FolderOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CategoryFolderConnectionArgs = {
  where?: InputMaybe<CategoryFolderConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CategoryFolderConnectionSort>>;
};

export type CategoryCabinetAggregateArgs = {
  where?: InputMaybe<CabinetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CategoryCabinetArgs = {
  where?: InputMaybe<CabinetWhere>;
  options?: InputMaybe<CabinetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CategoryCabinetConnectionArgs = {
  where?: InputMaybe<CategoryCabinetConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CategoryCabinetConnectionSort>>;
};

export type CategoryAggregateSelection = {
  __typename?: "CategoryAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CategoryCabinetCabinetAggregationSelection = {
  __typename?: "CategoryCabinetCabinetAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CategoryCabinetCabinetNodeAggregateSelection>;
};

export type CategoryCabinetCabinetNodeAggregateSelection = {
  __typename?: "CategoryCabinetCabinetNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CategoryCabinetConnection = {
  __typename?: "CategoryCabinetConnection";
  edges: Array<CategoryCabinetRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CategoryCabinetRelationship = {
  __typename?: "CategoryCabinetRelationship";
  cursor: Scalars["String"]["output"];
  node: Cabinet;
};

export type CategoryEdge = {
  __typename?: "CategoryEdge";
  cursor: Scalars["String"]["output"];
  node: Category;
};

export type CategoryFileFilesAggregationSelection = {
  __typename?: "CategoryFileFilesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CategoryFileFilesNodeAggregateSelection>;
};

export type CategoryFileFilesNodeAggregateSelection = {
  __typename?: "CategoryFileFilesNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CategoryFilesConnection = {
  __typename?: "CategoryFilesConnection";
  edges: Array<CategoryFilesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CategoryFilesRelationship = {
  __typename?: "CategoryFilesRelationship";
  cursor: Scalars["String"]["output"];
  node: File;
};

export type CategoryFolderConnection = {
  __typename?: "CategoryFolderConnection";
  edges: Array<CategoryFolderRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CategoryFolderFolderAggregationSelection = {
  __typename?: "CategoryFolderFolderAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CategoryFolderFolderNodeAggregateSelection>;
  edge?: Maybe<CategoryFolderFolderEdgeAggregateSelection>;
};

export type CategoryFolderFolderEdgeAggregateSelection = {
  __typename?: "CategoryFolderFolderEdgeAggregateSelection";
  color: StringAggregateSelection;
};

export type CategoryFolderFolderNodeAggregateSelection = {
  __typename?: "CategoryFolderFolderNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CategoryFolderRelationship = {
  __typename?: "CategoryFolderRelationship";
  cursor: Scalars["String"]["output"];
  node: Folder;
  properties: ColorType;
};

/**
 * The edge properties for the following fields:
 * * Category.folder
 * * Folder.categories
 */
export type ColorType = {
  __typename?: "ColorType";
  color?: Maybe<Scalars["String"]["output"]>;
};

export type CreateCabinetsMutationResponse = {
  __typename?: "CreateCabinetsMutationResponse";
  info: CreateInfo;
  cabinets: Array<Cabinet>;
};

export type CreateCategoriesMutationResponse = {
  __typename?: "CreateCategoriesMutationResponse";
  info: CreateInfo;
  categories: Array<Category>;
};

export type CreateFilesMutationResponse = {
  __typename?: "CreateFilesMutationResponse";
  info: CreateInfo;
  files: Array<File>;
};

export type CreateFoldersMutationResponse = {
  __typename?: "CreateFoldersMutationResponse";
  info: CreateInfo;
  folders: Array<Folder>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type CreateUsMutationResponse = {
  __typename?: "CreateUsMutationResponse";
  info: CreateInfo;
  us: Array<Me>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type File = {
  __typename?: "File";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  categoryAggregate?: Maybe<FileCategoryCategoryAggregationSelection>;
  category?: Maybe<Category>;
  categoryConnection: FileCategoryConnection;
  folderAggregate?: Maybe<FileFolderFolderAggregationSelection>;
  folder: Folder;
  folderConnection: FileFolderConnection;
};

export type FileCategoryAggregateArgs = {
  where?: InputMaybe<CategoryWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FileCategoryArgs = {
  where?: InputMaybe<CategoryWhere>;
  options?: InputMaybe<CategoryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FileCategoryConnectionArgs = {
  where?: InputMaybe<FileCategoryConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<FileCategoryConnectionSort>>;
};

export type FileFolderAggregateArgs = {
  where?: InputMaybe<FolderWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FileFolderArgs = {
  where?: InputMaybe<FolderWhere>;
  options?: InputMaybe<FolderOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FileFolderConnectionArgs = {
  where?: InputMaybe<FileFolderConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<FileFolderConnectionSort>>;
};

export type FileAggregateSelection = {
  __typename?: "FileAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FileCategoryCategoryAggregationSelection = {
  __typename?: "FileCategoryCategoryAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<FileCategoryCategoryNodeAggregateSelection>;
};

export type FileCategoryCategoryNodeAggregateSelection = {
  __typename?: "FileCategoryCategoryNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FileCategoryConnection = {
  __typename?: "FileCategoryConnection";
  edges: Array<FileCategoryRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type FileCategoryRelationship = {
  __typename?: "FileCategoryRelationship";
  cursor: Scalars["String"]["output"];
  node: Category;
};

export type FileEdge = {
  __typename?: "FileEdge";
  cursor: Scalars["String"]["output"];
  node: File;
};

export type FileFolderConnection = {
  __typename?: "FileFolderConnection";
  edges: Array<FileFolderRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type FileFolderFolderAggregationSelection = {
  __typename?: "FileFolderFolderAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<FileFolderFolderNodeAggregateSelection>;
};

export type FileFolderFolderNodeAggregateSelection = {
  __typename?: "FileFolderFolderNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FileFolderRelationship = {
  __typename?: "FileFolderRelationship";
  cursor: Scalars["String"]["output"];
  node: Folder;
};

export type FilesConnection = {
  __typename?: "FilesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<FileEdge>;
};

export type Folder = {
  __typename?: "Folder";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  categoriesAggregate?: Maybe<FolderCategoryCategoriesAggregationSelection>;
  categories: Array<Category>;
  categoriesConnection: FolderCategoriesConnection;
  filesAggregate?: Maybe<FolderFileFilesAggregationSelection>;
  files: Array<File>;
  filesConnection: FolderFilesConnection;
  cabinetAggregate?: Maybe<FolderCabinetCabinetAggregationSelection>;
  cabinet: Cabinet;
  cabinetConnection: FolderCabinetConnection;
};

export type FolderCategoriesAggregateArgs = {
  where?: InputMaybe<CategoryWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FolderCategoriesArgs = {
  where?: InputMaybe<CategoryWhere>;
  options?: InputMaybe<CategoryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FolderCategoriesConnectionArgs = {
  where?: InputMaybe<FolderCategoriesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<FolderCategoriesConnectionSort>>;
};

export type FolderFilesAggregateArgs = {
  where?: InputMaybe<FileWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FolderFilesArgs = {
  where?: InputMaybe<FileWhere>;
  options?: InputMaybe<FileOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FolderFilesConnectionArgs = {
  where?: InputMaybe<FolderFilesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<FolderFilesConnectionSort>>;
};

export type FolderCabinetAggregateArgs = {
  where?: InputMaybe<CabinetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FolderCabinetArgs = {
  where?: InputMaybe<CabinetWhere>;
  options?: InputMaybe<CabinetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type FolderCabinetConnectionArgs = {
  where?: InputMaybe<FolderCabinetConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<FolderCabinetConnectionSort>>;
};

export type FolderAggregateSelection = {
  __typename?: "FolderAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FolderCabinetCabinetAggregationSelection = {
  __typename?: "FolderCabinetCabinetAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<FolderCabinetCabinetNodeAggregateSelection>;
};

export type FolderCabinetCabinetNodeAggregateSelection = {
  __typename?: "FolderCabinetCabinetNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FolderCabinetConnection = {
  __typename?: "FolderCabinetConnection";
  edges: Array<FolderCabinetRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type FolderCabinetRelationship = {
  __typename?: "FolderCabinetRelationship";
  cursor: Scalars["String"]["output"];
  node: Cabinet;
};

export type FolderCategoriesConnection = {
  __typename?: "FolderCategoriesConnection";
  edges: Array<FolderCategoriesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type FolderCategoriesRelationship = {
  __typename?: "FolderCategoriesRelationship";
  cursor: Scalars["String"]["output"];
  node: Category;
  properties: ColorType;
};

export type FolderCategoryCategoriesAggregationSelection = {
  __typename?: "FolderCategoryCategoriesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<FolderCategoryCategoriesNodeAggregateSelection>;
  edge?: Maybe<FolderCategoryCategoriesEdgeAggregateSelection>;
};

export type FolderCategoryCategoriesEdgeAggregateSelection = {
  __typename?: "FolderCategoryCategoriesEdgeAggregateSelection";
  color: StringAggregateSelection;
};

export type FolderCategoryCategoriesNodeAggregateSelection = {
  __typename?: "FolderCategoryCategoriesNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FolderEdge = {
  __typename?: "FolderEdge";
  cursor: Scalars["String"]["output"];
  node: Folder;
};

export type FolderFileFilesAggregationSelection = {
  __typename?: "FolderFileFilesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<FolderFileFilesNodeAggregateSelection>;
};

export type FolderFileFilesNodeAggregateSelection = {
  __typename?: "FolderFileFilesNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FolderFilesConnection = {
  __typename?: "FolderFilesConnection";
  edges: Array<FolderFilesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type FolderFilesRelationship = {
  __typename?: "FolderFilesRelationship";
  cursor: Scalars["String"]["output"];
  node: File;
};

export type FoldersConnection = {
  __typename?: "FoldersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<FolderEdge>;
};

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection";
  shortest?: Maybe<Scalars["ID"]["output"]>;
  longest?: Maybe<Scalars["ID"]["output"]>;
};

/** Test type that returns info about user */
export type Me = {
  __typename?: "Me";
  myId: Scalars["ID"]["output"];
  /** Test type that returns info about user's role */
  roles: Array<Scalars["String"]["output"]>;
};

export type MeAggregateSelection = {
  __typename?: "MeAggregateSelection";
  count: Scalars["Int"]["output"];
  myId: IdAggregateSelection;
};

export type MeEdge = {
  __typename?: "MeEdge";
  cursor: Scalars["String"]["output"];
  node: Me;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateCabinetsMutationResponse = {
  __typename?: "UpdateCabinetsMutationResponse";
  info: UpdateInfo;
  cabinets: Array<Cabinet>;
};

export type UpdateCategoriesMutationResponse = {
  __typename?: "UpdateCategoriesMutationResponse";
  info: UpdateInfo;
  categories: Array<Category>;
};

export type UpdateFilesMutationResponse = {
  __typename?: "UpdateFilesMutationResponse";
  info: UpdateInfo;
  files: Array<File>;
};

export type UpdateFoldersMutationResponse = {
  __typename?: "UpdateFoldersMutationResponse";
  info: UpdateInfo;
  folders: Array<Folder>;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type UpdateUsMutationResponse = {
  __typename?: "UpdateUsMutationResponse";
  info: UpdateInfo;
  us: Array<Me>;
};

export type UsConnection = {
  __typename?: "UsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<MeEdge>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  cabinetsAggregate?: Maybe<UserCabinetCabinetsAggregationSelection>;
  cabinets: Array<Cabinet>;
  cabinetsConnection: UserCabinetsConnection;
};

export type UserCabinetsAggregateArgs = {
  where?: InputMaybe<CabinetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCabinetsArgs = {
  where?: InputMaybe<CabinetWhere>;
  options?: InputMaybe<CabinetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserCabinetsConnectionArgs = {
  where?: InputMaybe<UserCabinetsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserCabinetsConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type UserCabinetCabinetsAggregationSelection = {
  __typename?: "UserCabinetCabinetsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserCabinetCabinetsNodeAggregateSelection>;
};

export type UserCabinetCabinetsNodeAggregateSelection = {
  __typename?: "UserCabinetCabinetsNodeAggregateSelection";
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type UserCabinetsConnection = {
  __typename?: "UserCabinetsConnection";
  edges: Array<UserCabinetsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserCabinetsRelationship = {
  __typename?: "UserCabinetsRelationship";
  cursor: Scalars["String"]["output"];
  node: Cabinet;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type CabinetCategoriesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CabinetCategoriesAggregateInput>>;
  OR?: InputMaybe<Array<CabinetCategoriesAggregateInput>>;
  NOT?: InputMaybe<CabinetCategoriesAggregateInput>;
  node?: InputMaybe<CabinetCategoriesNodeAggregationWhereInput>;
};

export type CabinetCategoriesConnectFieldInput = {
  where?: InputMaybe<CategoryConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<CategoryConnectInput>>;
};

export type CabinetCategoriesConnectionSort = {
  node?: InputMaybe<CategorySort>;
};

export type CabinetCategoriesConnectionWhere = {
  AND?: InputMaybe<Array<CabinetCategoriesConnectionWhere>>;
  OR?: InputMaybe<Array<CabinetCategoriesConnectionWhere>>;
  NOT?: InputMaybe<CabinetCategoriesConnectionWhere>;
  node?: InputMaybe<CategoryWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CategoryWhere>;
};

export type CabinetCategoriesCreateFieldInput = {
  node: CategoryCreateInput;
};

export type CabinetCategoriesDeleteFieldInput = {
  where?: InputMaybe<CabinetCategoriesConnectionWhere>;
  delete?: InputMaybe<CategoryDeleteInput>;
};

export type CabinetCategoriesDisconnectFieldInput = {
  where?: InputMaybe<CabinetCategoriesConnectionWhere>;
  disconnect?: InputMaybe<CategoryDisconnectInput>;
};

export type CabinetCategoriesFieldInput = {
  connect?: InputMaybe<Array<CabinetCategoriesConnectFieldInput>>;
  create?: InputMaybe<Array<CabinetCategoriesCreateFieldInput>>;
};

export type CabinetCategoriesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CabinetCategoriesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CabinetCategoriesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CabinetCategoriesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CabinetCategoriesUpdateConnectionInput = {
  node?: InputMaybe<CategoryUpdateInput>;
};

export type CabinetCategoriesUpdateFieldInput = {
  where?: InputMaybe<CabinetCategoriesConnectionWhere>;
  connect?: InputMaybe<Array<CabinetCategoriesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CabinetCategoriesDisconnectFieldInput>>;
  create?: InputMaybe<Array<CabinetCategoriesCreateFieldInput>>;
  update?: InputMaybe<CabinetCategoriesUpdateConnectionInput>;
  delete?: InputMaybe<Array<CabinetCategoriesDeleteFieldInput>>;
};

export type CabinetConnectInput = {
  folders?: InputMaybe<Array<CabinetFoldersConnectFieldInput>>;
  categories?: InputMaybe<Array<CabinetCategoriesConnectFieldInput>>;
  user?: InputMaybe<CabinetUserConnectFieldInput>;
};

export type CabinetConnectWhere = {
  node: CabinetWhere;
};

export type CabinetCreateInput = {
  name: Scalars["String"]["input"];
  folders?: InputMaybe<CabinetFoldersFieldInput>;
  categories?: InputMaybe<CabinetCategoriesFieldInput>;
  user?: InputMaybe<CabinetUserFieldInput>;
};

export type CabinetDeleteInput = {
  folders?: InputMaybe<Array<CabinetFoldersDeleteFieldInput>>;
  categories?: InputMaybe<Array<CabinetCategoriesDeleteFieldInput>>;
  user?: InputMaybe<CabinetUserDeleteFieldInput>;
};

export type CabinetDisconnectInput = {
  folders?: InputMaybe<Array<CabinetFoldersDisconnectFieldInput>>;
  categories?: InputMaybe<Array<CabinetCategoriesDisconnectFieldInput>>;
  user?: InputMaybe<CabinetUserDisconnectFieldInput>;
};

export type CabinetFoldersAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CabinetFoldersAggregateInput>>;
  OR?: InputMaybe<Array<CabinetFoldersAggregateInput>>;
  NOT?: InputMaybe<CabinetFoldersAggregateInput>;
  node?: InputMaybe<CabinetFoldersNodeAggregationWhereInput>;
};

export type CabinetFoldersConnectFieldInput = {
  where?: InputMaybe<FolderConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<FolderConnectInput>>;
};

export type CabinetFoldersConnectionSort = {
  node?: InputMaybe<FolderSort>;
};

export type CabinetFoldersConnectionWhere = {
  AND?: InputMaybe<Array<CabinetFoldersConnectionWhere>>;
  OR?: InputMaybe<Array<CabinetFoldersConnectionWhere>>;
  NOT?: InputMaybe<CabinetFoldersConnectionWhere>;
  node?: InputMaybe<FolderWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<FolderWhere>;
};

export type CabinetFoldersCreateFieldInput = {
  node: FolderCreateInput;
};

export type CabinetFoldersDeleteFieldInput = {
  where?: InputMaybe<CabinetFoldersConnectionWhere>;
  delete?: InputMaybe<FolderDeleteInput>;
};

export type CabinetFoldersDisconnectFieldInput = {
  where?: InputMaybe<CabinetFoldersConnectionWhere>;
  disconnect?: InputMaybe<FolderDisconnectInput>;
};

export type CabinetFoldersFieldInput = {
  connect?: InputMaybe<Array<CabinetFoldersConnectFieldInput>>;
  create?: InputMaybe<Array<CabinetFoldersCreateFieldInput>>;
};

export type CabinetFoldersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CabinetFoldersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CabinetFoldersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CabinetFoldersNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CabinetFoldersUpdateConnectionInput = {
  node?: InputMaybe<FolderUpdateInput>;
};

export type CabinetFoldersUpdateFieldInput = {
  where?: InputMaybe<CabinetFoldersConnectionWhere>;
  connect?: InputMaybe<Array<CabinetFoldersConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CabinetFoldersDisconnectFieldInput>>;
  create?: InputMaybe<Array<CabinetFoldersCreateFieldInput>>;
  update?: InputMaybe<CabinetFoldersUpdateConnectionInput>;
  delete?: InputMaybe<Array<CabinetFoldersDeleteFieldInput>>;
};

export type CabinetOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more CabinetSort objects to sort Cabinets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CabinetSort>>;
};

export type CabinetRelationInput = {
  folders?: InputMaybe<Array<CabinetFoldersCreateFieldInput>>;
  categories?: InputMaybe<Array<CabinetCategoriesCreateFieldInput>>;
  user?: InputMaybe<CabinetUserCreateFieldInput>;
};

/** Fields to sort Cabinets by. The order in which sorts are applied is not guaranteed when specifying many fields in one CabinetSort object. */
export type CabinetSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type CabinetUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  folders?: InputMaybe<Array<CabinetFoldersUpdateFieldInput>>;
  categories?: InputMaybe<Array<CabinetCategoriesUpdateFieldInput>>;
  user?: InputMaybe<CabinetUserUpdateFieldInput>;
};

export type CabinetUserAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CabinetUserAggregateInput>>;
  OR?: InputMaybe<Array<CabinetUserAggregateInput>>;
  NOT?: InputMaybe<CabinetUserAggregateInput>;
  node?: InputMaybe<CabinetUserNodeAggregationWhereInput>;
};

export type CabinetUserConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<UserConnectInput>;
};

export type CabinetUserConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type CabinetUserConnectionWhere = {
  AND?: InputMaybe<Array<CabinetUserConnectionWhere>>;
  OR?: InputMaybe<Array<CabinetUserConnectionWhere>>;
  NOT?: InputMaybe<CabinetUserConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type CabinetUserCreateFieldInput = {
  node: UserCreateInput;
};

export type CabinetUserDeleteFieldInput = {
  where?: InputMaybe<CabinetUserConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type CabinetUserDisconnectFieldInput = {
  where?: InputMaybe<CabinetUserConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type CabinetUserFieldInput = {
  connect?: InputMaybe<CabinetUserConnectFieldInput>;
  create?: InputMaybe<CabinetUserCreateFieldInput>;
};

export type CabinetUserNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CabinetUserNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CabinetUserNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CabinetUserNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CabinetUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type CabinetUserUpdateFieldInput = {
  where?: InputMaybe<CabinetUserConnectionWhere>;
  connect?: InputMaybe<CabinetUserConnectFieldInput>;
  disconnect?: InputMaybe<CabinetUserDisconnectFieldInput>;
  create?: InputMaybe<CabinetUserCreateFieldInput>;
  update?: InputMaybe<CabinetUserUpdateConnectionInput>;
  delete?: InputMaybe<CabinetUserDeleteFieldInput>;
};

export type CabinetWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<CabinetWhere>>;
  AND?: InputMaybe<Array<CabinetWhere>>;
  NOT?: InputMaybe<CabinetWhere>;
  /** @deprecated Use `folders_SOME` instead. */
  folders?: InputMaybe<FolderWhere>;
  /** @deprecated Use `folders_NONE` instead. */
  folders_NOT?: InputMaybe<FolderWhere>;
  /** Return Cabinets where all of the related Folders match this filter */
  folders_ALL?: InputMaybe<FolderWhere>;
  /** Return Cabinets where none of the related Folders match this filter */
  folders_NONE?: InputMaybe<FolderWhere>;
  /** Return Cabinets where one of the related Folders match this filter */
  folders_SINGLE?: InputMaybe<FolderWhere>;
  /** Return Cabinets where some of the related Folders match this filter */
  folders_SOME?: InputMaybe<FolderWhere>;
  /** @deprecated Use `foldersConnection_SOME` instead. */
  foldersConnection?: InputMaybe<CabinetFoldersConnectionWhere>;
  /** @deprecated Use `foldersConnection_NONE` instead. */
  foldersConnection_NOT?: InputMaybe<CabinetFoldersConnectionWhere>;
  /** Return Cabinets where all of the related CabinetFoldersConnections match this filter */
  foldersConnection_ALL?: InputMaybe<CabinetFoldersConnectionWhere>;
  /** Return Cabinets where none of the related CabinetFoldersConnections match this filter */
  foldersConnection_NONE?: InputMaybe<CabinetFoldersConnectionWhere>;
  /** Return Cabinets where one of the related CabinetFoldersConnections match this filter */
  foldersConnection_SINGLE?: InputMaybe<CabinetFoldersConnectionWhere>;
  /** Return Cabinets where some of the related CabinetFoldersConnections match this filter */
  foldersConnection_SOME?: InputMaybe<CabinetFoldersConnectionWhere>;
  foldersAggregate?: InputMaybe<CabinetFoldersAggregateInput>;
  /** @deprecated Use `categories_SOME` instead. */
  categories?: InputMaybe<CategoryWhere>;
  /** @deprecated Use `categories_NONE` instead. */
  categories_NOT?: InputMaybe<CategoryWhere>;
  /** Return Cabinets where all of the related Categories match this filter */
  categories_ALL?: InputMaybe<CategoryWhere>;
  /** Return Cabinets where none of the related Categories match this filter */
  categories_NONE?: InputMaybe<CategoryWhere>;
  /** Return Cabinets where one of the related Categories match this filter */
  categories_SINGLE?: InputMaybe<CategoryWhere>;
  /** Return Cabinets where some of the related Categories match this filter */
  categories_SOME?: InputMaybe<CategoryWhere>;
  /** @deprecated Use `categoriesConnection_SOME` instead. */
  categoriesConnection?: InputMaybe<CabinetCategoriesConnectionWhere>;
  /** @deprecated Use `categoriesConnection_NONE` instead. */
  categoriesConnection_NOT?: InputMaybe<CabinetCategoriesConnectionWhere>;
  /** Return Cabinets where all of the related CabinetCategoriesConnections match this filter */
  categoriesConnection_ALL?: InputMaybe<CabinetCategoriesConnectionWhere>;
  /** Return Cabinets where none of the related CabinetCategoriesConnections match this filter */
  categoriesConnection_NONE?: InputMaybe<CabinetCategoriesConnectionWhere>;
  /** Return Cabinets where one of the related CabinetCategoriesConnections match this filter */
  categoriesConnection_SINGLE?: InputMaybe<CabinetCategoriesConnectionWhere>;
  /** Return Cabinets where some of the related CabinetCategoriesConnections match this filter */
  categoriesConnection_SOME?: InputMaybe<CabinetCategoriesConnectionWhere>;
  categoriesAggregate?: InputMaybe<CabinetCategoriesAggregateInput>;
  user?: InputMaybe<UserWhere>;
  user_NOT?: InputMaybe<UserWhere>;
  userConnection?: InputMaybe<CabinetUserConnectionWhere>;
  userConnection_NOT?: InputMaybe<CabinetUserConnectionWhere>;
  userAggregate?: InputMaybe<CabinetUserAggregateInput>;
};

export type CategoryCabinetAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CategoryCabinetAggregateInput>>;
  OR?: InputMaybe<Array<CategoryCabinetAggregateInput>>;
  NOT?: InputMaybe<CategoryCabinetAggregateInput>;
  node?: InputMaybe<CategoryCabinetNodeAggregationWhereInput>;
};

export type CategoryCabinetConnectFieldInput = {
  where?: InputMaybe<CabinetConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<CabinetConnectInput>;
};

export type CategoryCabinetConnectionSort = {
  node?: InputMaybe<CabinetSort>;
};

export type CategoryCabinetConnectionWhere = {
  AND?: InputMaybe<Array<CategoryCabinetConnectionWhere>>;
  OR?: InputMaybe<Array<CategoryCabinetConnectionWhere>>;
  NOT?: InputMaybe<CategoryCabinetConnectionWhere>;
  node?: InputMaybe<CabinetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CabinetWhere>;
};

export type CategoryCabinetCreateFieldInput = {
  node: CabinetCreateInput;
};

export type CategoryCabinetDeleteFieldInput = {
  where?: InputMaybe<CategoryCabinetConnectionWhere>;
  delete?: InputMaybe<CabinetDeleteInput>;
};

export type CategoryCabinetDisconnectFieldInput = {
  where?: InputMaybe<CategoryCabinetConnectionWhere>;
  disconnect?: InputMaybe<CabinetDisconnectInput>;
};

export type CategoryCabinetFieldInput = {
  connect?: InputMaybe<CategoryCabinetConnectFieldInput>;
  create?: InputMaybe<CategoryCabinetCreateFieldInput>;
};

export type CategoryCabinetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CategoryCabinetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CategoryCabinetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CategoryCabinetNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CategoryCabinetUpdateConnectionInput = {
  node?: InputMaybe<CabinetUpdateInput>;
};

export type CategoryCabinetUpdateFieldInput = {
  where?: InputMaybe<CategoryCabinetConnectionWhere>;
  connect?: InputMaybe<CategoryCabinetConnectFieldInput>;
  disconnect?: InputMaybe<CategoryCabinetDisconnectFieldInput>;
  create?: InputMaybe<CategoryCabinetCreateFieldInput>;
  update?: InputMaybe<CategoryCabinetUpdateConnectionInput>;
  delete?: InputMaybe<CategoryCabinetDeleteFieldInput>;
};

export type CategoryConnectInput = {
  files?: InputMaybe<Array<CategoryFilesConnectFieldInput>>;
  folder?: InputMaybe<Array<CategoryFolderConnectFieldInput>>;
  cabinet?: InputMaybe<CategoryCabinetConnectFieldInput>;
};

export type CategoryConnectOrCreateInput = {
  files?: InputMaybe<Array<CategoryFilesConnectOrCreateFieldInput>>;
};

export type CategoryConnectWhere = {
  node: CategoryWhere;
};

export type CategoryCreateInput = {
  name: Scalars["String"]["input"];
  files?: InputMaybe<CategoryFilesFieldInput>;
  folder?: InputMaybe<CategoryFolderFieldInput>;
  cabinet?: InputMaybe<CategoryCabinetFieldInput>;
};

export type CategoryDeleteInput = {
  files?: InputMaybe<Array<CategoryFilesDeleteFieldInput>>;
  folder?: InputMaybe<Array<CategoryFolderDeleteFieldInput>>;
  cabinet?: InputMaybe<CategoryCabinetDeleteFieldInput>;
};

export type CategoryDisconnectInput = {
  files?: InputMaybe<Array<CategoryFilesDisconnectFieldInput>>;
  folder?: InputMaybe<Array<CategoryFolderDisconnectFieldInput>>;
  cabinet?: InputMaybe<CategoryCabinetDisconnectFieldInput>;
};

export type CategoryFilesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CategoryFilesAggregateInput>>;
  OR?: InputMaybe<Array<CategoryFilesAggregateInput>>;
  NOT?: InputMaybe<CategoryFilesAggregateInput>;
  node?: InputMaybe<CategoryFilesNodeAggregationWhereInput>;
};

export type CategoryFilesConnectFieldInput = {
  where?: InputMaybe<FileConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<FileConnectInput>>;
};

export type CategoryFilesConnectionSort = {
  node?: InputMaybe<FileSort>;
};

export type CategoryFilesConnectionWhere = {
  AND?: InputMaybe<Array<CategoryFilesConnectionWhere>>;
  OR?: InputMaybe<Array<CategoryFilesConnectionWhere>>;
  NOT?: InputMaybe<CategoryFilesConnectionWhere>;
  node?: InputMaybe<FileWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<FileWhere>;
};

export type CategoryFilesConnectOrCreateFieldInput = {
  where: FileConnectOrCreateWhere;
  onCreate: CategoryFilesConnectOrCreateFieldInputOnCreate;
};

export type CategoryFilesConnectOrCreateFieldInputOnCreate = {
  node: FileOnCreateInput;
};

export type CategoryFilesCreateFieldInput = {
  node: FileCreateInput;
};

export type CategoryFilesDeleteFieldInput = {
  where?: InputMaybe<CategoryFilesConnectionWhere>;
  delete?: InputMaybe<FileDeleteInput>;
};

export type CategoryFilesDisconnectFieldInput = {
  where?: InputMaybe<CategoryFilesConnectionWhere>;
  disconnect?: InputMaybe<FileDisconnectInput>;
};

export type CategoryFilesFieldInput = {
  connectOrCreate?: InputMaybe<Array<CategoryFilesConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<CategoryFilesConnectFieldInput>>;
  create?: InputMaybe<Array<CategoryFilesCreateFieldInput>>;
};

export type CategoryFilesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CategoryFilesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CategoryFilesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CategoryFilesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CategoryFilesUpdateConnectionInput = {
  node?: InputMaybe<FileUpdateInput>;
};

export type CategoryFilesUpdateFieldInput = {
  where?: InputMaybe<CategoryFilesConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<CategoryFilesConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<CategoryFilesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CategoryFilesDisconnectFieldInput>>;
  create?: InputMaybe<Array<CategoryFilesCreateFieldInput>>;
  update?: InputMaybe<CategoryFilesUpdateConnectionInput>;
  delete?: InputMaybe<Array<CategoryFilesDeleteFieldInput>>;
};

export type CategoryFolderAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CategoryFolderAggregateInput>>;
  OR?: InputMaybe<Array<CategoryFolderAggregateInput>>;
  NOT?: InputMaybe<CategoryFolderAggregateInput>;
  node?: InputMaybe<CategoryFolderNodeAggregationWhereInput>;
  edge?: InputMaybe<ColorTypeAggregationWhereInput>;
};

export type CategoryFolderConnectFieldInput = {
  edge?: InputMaybe<ColorTypeCreateInput>;
  where?: InputMaybe<FolderConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<FolderConnectInput>>;
};

export type CategoryFolderConnectionSort = {
  node?: InputMaybe<FolderSort>;
  edge?: InputMaybe<ColorTypeSort>;
};

export type CategoryFolderConnectionWhere = {
  AND?: InputMaybe<Array<CategoryFolderConnectionWhere>>;
  OR?: InputMaybe<Array<CategoryFolderConnectionWhere>>;
  NOT?: InputMaybe<CategoryFolderConnectionWhere>;
  node?: InputMaybe<FolderWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<FolderWhere>;
  edge?: InputMaybe<ColorTypeWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ColorTypeWhere>;
};

export type CategoryFolderCreateFieldInput = {
  edge?: InputMaybe<ColorTypeCreateInput>;
  node: FolderCreateInput;
};

export type CategoryFolderDeleteFieldInput = {
  where?: InputMaybe<CategoryFolderConnectionWhere>;
  delete?: InputMaybe<FolderDeleteInput>;
};

export type CategoryFolderDisconnectFieldInput = {
  where?: InputMaybe<CategoryFolderConnectionWhere>;
  disconnect?: InputMaybe<FolderDisconnectInput>;
};

export type CategoryFolderFieldInput = {
  connect?: InputMaybe<Array<CategoryFolderConnectFieldInput>>;
  create?: InputMaybe<Array<CategoryFolderCreateFieldInput>>;
};

export type CategoryFolderNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CategoryFolderNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CategoryFolderNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CategoryFolderNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CategoryFolderUpdateConnectionInput = {
  node?: InputMaybe<FolderUpdateInput>;
  edge?: InputMaybe<ColorTypeUpdateInput>;
};

export type CategoryFolderUpdateFieldInput = {
  where?: InputMaybe<CategoryFolderConnectionWhere>;
  connect?: InputMaybe<Array<CategoryFolderConnectFieldInput>>;
  disconnect?: InputMaybe<Array<CategoryFolderDisconnectFieldInput>>;
  create?: InputMaybe<Array<CategoryFolderCreateFieldInput>>;
  update?: InputMaybe<CategoryFolderUpdateConnectionInput>;
  delete?: InputMaybe<Array<CategoryFolderDeleteFieldInput>>;
};

export type CategoryOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more CategorySort objects to sort Categories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CategorySort>>;
};

export type CategoryRelationInput = {
  files?: InputMaybe<Array<CategoryFilesCreateFieldInput>>;
  folder?: InputMaybe<Array<CategoryFolderCreateFieldInput>>;
  cabinet?: InputMaybe<CategoryCabinetCreateFieldInput>;
};

/** Fields to sort Categories by. The order in which sorts are applied is not guaranteed when specifying many fields in one CategorySort object. */
export type CategorySort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type CategoryUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  files?: InputMaybe<Array<CategoryFilesUpdateFieldInput>>;
  folder?: InputMaybe<Array<CategoryFolderUpdateFieldInput>>;
  cabinet?: InputMaybe<CategoryCabinetUpdateFieldInput>;
};

export type CategoryWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<CategoryWhere>>;
  AND?: InputMaybe<Array<CategoryWhere>>;
  NOT?: InputMaybe<CategoryWhere>;
  /** @deprecated Use `files_SOME` instead. */
  files?: InputMaybe<FileWhere>;
  /** @deprecated Use `files_NONE` instead. */
  files_NOT?: InputMaybe<FileWhere>;
  /** Return Categories where all of the related Files match this filter */
  files_ALL?: InputMaybe<FileWhere>;
  /** Return Categories where none of the related Files match this filter */
  files_NONE?: InputMaybe<FileWhere>;
  /** Return Categories where one of the related Files match this filter */
  files_SINGLE?: InputMaybe<FileWhere>;
  /** Return Categories where some of the related Files match this filter */
  files_SOME?: InputMaybe<FileWhere>;
  /** @deprecated Use `filesConnection_SOME` instead. */
  filesConnection?: InputMaybe<CategoryFilesConnectionWhere>;
  /** @deprecated Use `filesConnection_NONE` instead. */
  filesConnection_NOT?: InputMaybe<CategoryFilesConnectionWhere>;
  /** Return Categories where all of the related CategoryFilesConnections match this filter */
  filesConnection_ALL?: InputMaybe<CategoryFilesConnectionWhere>;
  /** Return Categories where none of the related CategoryFilesConnections match this filter */
  filesConnection_NONE?: InputMaybe<CategoryFilesConnectionWhere>;
  /** Return Categories where one of the related CategoryFilesConnections match this filter */
  filesConnection_SINGLE?: InputMaybe<CategoryFilesConnectionWhere>;
  /** Return Categories where some of the related CategoryFilesConnections match this filter */
  filesConnection_SOME?: InputMaybe<CategoryFilesConnectionWhere>;
  filesAggregate?: InputMaybe<CategoryFilesAggregateInput>;
  /** @deprecated Use `folder_SOME` instead. */
  folder?: InputMaybe<FolderWhere>;
  /** @deprecated Use `folder_NONE` instead. */
  folder_NOT?: InputMaybe<FolderWhere>;
  /** Return Categories where all of the related Folders match this filter */
  folder_ALL?: InputMaybe<FolderWhere>;
  /** Return Categories where none of the related Folders match this filter */
  folder_NONE?: InputMaybe<FolderWhere>;
  /** Return Categories where one of the related Folders match this filter */
  folder_SINGLE?: InputMaybe<FolderWhere>;
  /** Return Categories where some of the related Folders match this filter */
  folder_SOME?: InputMaybe<FolderWhere>;
  /** @deprecated Use `folderConnection_SOME` instead. */
  folderConnection?: InputMaybe<CategoryFolderConnectionWhere>;
  /** @deprecated Use `folderConnection_NONE` instead. */
  folderConnection_NOT?: InputMaybe<CategoryFolderConnectionWhere>;
  /** Return Categories where all of the related CategoryFolderConnections match this filter */
  folderConnection_ALL?: InputMaybe<CategoryFolderConnectionWhere>;
  /** Return Categories where none of the related CategoryFolderConnections match this filter */
  folderConnection_NONE?: InputMaybe<CategoryFolderConnectionWhere>;
  /** Return Categories where one of the related CategoryFolderConnections match this filter */
  folderConnection_SINGLE?: InputMaybe<CategoryFolderConnectionWhere>;
  /** Return Categories where some of the related CategoryFolderConnections match this filter */
  folderConnection_SOME?: InputMaybe<CategoryFolderConnectionWhere>;
  folderAggregate?: InputMaybe<CategoryFolderAggregateInput>;
  cabinet?: InputMaybe<CabinetWhere>;
  cabinet_NOT?: InputMaybe<CabinetWhere>;
  cabinetConnection?: InputMaybe<CategoryCabinetConnectionWhere>;
  cabinetConnection_NOT?: InputMaybe<CategoryCabinetConnectionWhere>;
  cabinetAggregate?: InputMaybe<CategoryCabinetAggregateInput>;
};

export type ColorTypeAggregationWhereInput = {
  AND?: InputMaybe<Array<ColorTypeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ColorTypeAggregationWhereInput>>;
  NOT?: InputMaybe<ColorTypeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  color_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  color_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  color_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  color_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ColorTypeCreateInput = {
  color?: InputMaybe<Scalars["String"]["input"]>;
};

export type ColorTypeSort = {
  color?: InputMaybe<SortDirection>;
};

export type ColorTypeUpdateInput = {
  color?: InputMaybe<Scalars["String"]["input"]>;
};

export type ColorTypeWhere = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT?: InputMaybe<Scalars["String"]["input"]>;
  color_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  color_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  color_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  color_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  color_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<ColorTypeWhere>>;
  AND?: InputMaybe<Array<ColorTypeWhere>>;
  NOT?: InputMaybe<ColorTypeWhere>;
};

export type FileCategoryAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<FileCategoryAggregateInput>>;
  OR?: InputMaybe<Array<FileCategoryAggregateInput>>;
  NOT?: InputMaybe<FileCategoryAggregateInput>;
  node?: InputMaybe<FileCategoryNodeAggregationWhereInput>;
};

export type FileCategoryConnectFieldInput = {
  where?: InputMaybe<CategoryConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<CategoryConnectInput>;
};

export type FileCategoryConnectionSort = {
  node?: InputMaybe<CategorySort>;
};

export type FileCategoryConnectionWhere = {
  AND?: InputMaybe<Array<FileCategoryConnectionWhere>>;
  OR?: InputMaybe<Array<FileCategoryConnectionWhere>>;
  NOT?: InputMaybe<FileCategoryConnectionWhere>;
  node?: InputMaybe<CategoryWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CategoryWhere>;
};

export type FileCategoryCreateFieldInput = {
  node: CategoryCreateInput;
};

export type FileCategoryDeleteFieldInput = {
  where?: InputMaybe<FileCategoryConnectionWhere>;
  delete?: InputMaybe<CategoryDeleteInput>;
};

export type FileCategoryDisconnectFieldInput = {
  where?: InputMaybe<FileCategoryConnectionWhere>;
  disconnect?: InputMaybe<CategoryDisconnectInput>;
};

export type FileCategoryFieldInput = {
  connect?: InputMaybe<FileCategoryConnectFieldInput>;
  create?: InputMaybe<FileCategoryCreateFieldInput>;
};

export type FileCategoryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FileCategoryNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FileCategoryNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FileCategoryNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type FileCategoryUpdateConnectionInput = {
  node?: InputMaybe<CategoryUpdateInput>;
};

export type FileCategoryUpdateFieldInput = {
  where?: InputMaybe<FileCategoryConnectionWhere>;
  connect?: InputMaybe<FileCategoryConnectFieldInput>;
  disconnect?: InputMaybe<FileCategoryDisconnectFieldInput>;
  create?: InputMaybe<FileCategoryCreateFieldInput>;
  update?: InputMaybe<FileCategoryUpdateConnectionInput>;
  delete?: InputMaybe<FileCategoryDeleteFieldInput>;
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
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
  category?: InputMaybe<FileCategoryFieldInput>;
  folder?: InputMaybe<FileFolderFieldInput>;
};

export type FileDeleteInput = {
  category?: InputMaybe<FileCategoryDeleteFieldInput>;
  folder?: InputMaybe<FileFolderDeleteFieldInput>;
};

export type FileDisconnectInput = {
  category?: InputMaybe<FileCategoryDisconnectFieldInput>;
  folder?: InputMaybe<FileFolderDisconnectFieldInput>;
};

export type FileFolderAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<FileFolderAggregateInput>>;
  OR?: InputMaybe<Array<FileFolderAggregateInput>>;
  NOT?: InputMaybe<FileFolderAggregateInput>;
  node?: InputMaybe<FileFolderNodeAggregationWhereInput>;
};

export type FileFolderConnectFieldInput = {
  where?: InputMaybe<FolderConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<FolderConnectInput>;
};

export type FileFolderConnectionSort = {
  node?: InputMaybe<FolderSort>;
};

export type FileFolderConnectionWhere = {
  AND?: InputMaybe<Array<FileFolderConnectionWhere>>;
  OR?: InputMaybe<Array<FileFolderConnectionWhere>>;
  NOT?: InputMaybe<FileFolderConnectionWhere>;
  node?: InputMaybe<FolderWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<FolderWhere>;
};

export type FileFolderCreateFieldInput = {
  node: FolderCreateInput;
};

export type FileFolderDeleteFieldInput = {
  where?: InputMaybe<FileFolderConnectionWhere>;
  delete?: InputMaybe<FolderDeleteInput>;
};

export type FileFolderDisconnectFieldInput = {
  where?: InputMaybe<FileFolderConnectionWhere>;
  disconnect?: InputMaybe<FolderDisconnectInput>;
};

export type FileFolderFieldInput = {
  connect?: InputMaybe<FileFolderConnectFieldInput>;
  create?: InputMaybe<FileFolderCreateFieldInput>;
};

export type FileFolderNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FileFolderNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FileFolderNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FileFolderNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type FileFolderUpdateConnectionInput = {
  node?: InputMaybe<FolderUpdateInput>;
};

export type FileFolderUpdateFieldInput = {
  where?: InputMaybe<FileFolderConnectionWhere>;
  connect?: InputMaybe<FileFolderConnectFieldInput>;
  disconnect?: InputMaybe<FileFolderDisconnectFieldInput>;
  create?: InputMaybe<FileFolderCreateFieldInput>;
  update?: InputMaybe<FileFolderUpdateConnectionInput>;
  delete?: InputMaybe<FileFolderDeleteFieldInput>;
};

export type FileOnCreateInput = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type FileOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
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
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type FileUpdateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<FileCategoryUpdateFieldInput>;
  folder?: InputMaybe<FileFolderUpdateFieldInput>;
};

export type FileWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<FileWhere>>;
  AND?: InputMaybe<Array<FileWhere>>;
  NOT?: InputMaybe<FileWhere>;
  category?: InputMaybe<CategoryWhere>;
  category_NOT?: InputMaybe<CategoryWhere>;
  categoryConnection?: InputMaybe<FileCategoryConnectionWhere>;
  categoryConnection_NOT?: InputMaybe<FileCategoryConnectionWhere>;
  categoryAggregate?: InputMaybe<FileCategoryAggregateInput>;
  folder?: InputMaybe<FolderWhere>;
  folder_NOT?: InputMaybe<FolderWhere>;
  folderConnection?: InputMaybe<FileFolderConnectionWhere>;
  folderConnection_NOT?: InputMaybe<FileFolderConnectionWhere>;
  folderAggregate?: InputMaybe<FileFolderAggregateInput>;
};

export type FolderCabinetAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<FolderCabinetAggregateInput>>;
  OR?: InputMaybe<Array<FolderCabinetAggregateInput>>;
  NOT?: InputMaybe<FolderCabinetAggregateInput>;
  node?: InputMaybe<FolderCabinetNodeAggregationWhereInput>;
};

export type FolderCabinetConnectFieldInput = {
  where?: InputMaybe<CabinetConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<CabinetConnectInput>;
};

export type FolderCabinetConnectionSort = {
  node?: InputMaybe<CabinetSort>;
};

export type FolderCabinetConnectionWhere = {
  AND?: InputMaybe<Array<FolderCabinetConnectionWhere>>;
  OR?: InputMaybe<Array<FolderCabinetConnectionWhere>>;
  NOT?: InputMaybe<FolderCabinetConnectionWhere>;
  node?: InputMaybe<CabinetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CabinetWhere>;
};

export type FolderCabinetCreateFieldInput = {
  node: CabinetCreateInput;
};

export type FolderCabinetDeleteFieldInput = {
  where?: InputMaybe<FolderCabinetConnectionWhere>;
  delete?: InputMaybe<CabinetDeleteInput>;
};

export type FolderCabinetDisconnectFieldInput = {
  where?: InputMaybe<FolderCabinetConnectionWhere>;
  disconnect?: InputMaybe<CabinetDisconnectInput>;
};

export type FolderCabinetFieldInput = {
  connect?: InputMaybe<FolderCabinetConnectFieldInput>;
  create?: InputMaybe<FolderCabinetCreateFieldInput>;
};

export type FolderCabinetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FolderCabinetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FolderCabinetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FolderCabinetNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type FolderCabinetUpdateConnectionInput = {
  node?: InputMaybe<CabinetUpdateInput>;
};

export type FolderCabinetUpdateFieldInput = {
  where?: InputMaybe<FolderCabinetConnectionWhere>;
  connect?: InputMaybe<FolderCabinetConnectFieldInput>;
  disconnect?: InputMaybe<FolderCabinetDisconnectFieldInput>;
  create?: InputMaybe<FolderCabinetCreateFieldInput>;
  update?: InputMaybe<FolderCabinetUpdateConnectionInput>;
  delete?: InputMaybe<FolderCabinetDeleteFieldInput>;
};

export type FolderCategoriesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<FolderCategoriesAggregateInput>>;
  OR?: InputMaybe<Array<FolderCategoriesAggregateInput>>;
  NOT?: InputMaybe<FolderCategoriesAggregateInput>;
  node?: InputMaybe<FolderCategoriesNodeAggregationWhereInput>;
  edge?: InputMaybe<ColorTypeAggregationWhereInput>;
};

export type FolderCategoriesConnectFieldInput = {
  edge?: InputMaybe<ColorTypeCreateInput>;
  where?: InputMaybe<CategoryConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<CategoryConnectInput>>;
};

export type FolderCategoriesConnectionSort = {
  node?: InputMaybe<CategorySort>;
  edge?: InputMaybe<ColorTypeSort>;
};

export type FolderCategoriesConnectionWhere = {
  AND?: InputMaybe<Array<FolderCategoriesConnectionWhere>>;
  OR?: InputMaybe<Array<FolderCategoriesConnectionWhere>>;
  NOT?: InputMaybe<FolderCategoriesConnectionWhere>;
  node?: InputMaybe<CategoryWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CategoryWhere>;
  edge?: InputMaybe<ColorTypeWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ColorTypeWhere>;
};

export type FolderCategoriesCreateFieldInput = {
  edge?: InputMaybe<ColorTypeCreateInput>;
  node: CategoryCreateInput;
};

export type FolderCategoriesDeleteFieldInput = {
  where?: InputMaybe<FolderCategoriesConnectionWhere>;
  delete?: InputMaybe<CategoryDeleteInput>;
};

export type FolderCategoriesDisconnectFieldInput = {
  where?: InputMaybe<FolderCategoriesConnectionWhere>;
  disconnect?: InputMaybe<CategoryDisconnectInput>;
};

export type FolderCategoriesFieldInput = {
  connect?: InputMaybe<Array<FolderCategoriesConnectFieldInput>>;
  create?: InputMaybe<Array<FolderCategoriesCreateFieldInput>>;
};

export type FolderCategoriesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FolderCategoriesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FolderCategoriesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FolderCategoriesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type FolderCategoriesUpdateConnectionInput = {
  node?: InputMaybe<CategoryUpdateInput>;
  edge?: InputMaybe<ColorTypeUpdateInput>;
};

export type FolderCategoriesUpdateFieldInput = {
  where?: InputMaybe<FolderCategoriesConnectionWhere>;
  connect?: InputMaybe<Array<FolderCategoriesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<FolderCategoriesDisconnectFieldInput>>;
  create?: InputMaybe<Array<FolderCategoriesCreateFieldInput>>;
  update?: InputMaybe<FolderCategoriesUpdateConnectionInput>;
  delete?: InputMaybe<Array<FolderCategoriesDeleteFieldInput>>;
};

export type FolderConnectInput = {
  categories?: InputMaybe<Array<FolderCategoriesConnectFieldInput>>;
  files?: InputMaybe<Array<FolderFilesConnectFieldInput>>;
  cabinet?: InputMaybe<FolderCabinetConnectFieldInput>;
};

export type FolderConnectOrCreateInput = {
  files?: InputMaybe<Array<FolderFilesConnectOrCreateFieldInput>>;
};

export type FolderConnectWhere = {
  node: FolderWhere;
};

export type FolderCreateInput = {
  name: Scalars["String"]["input"];
  categories?: InputMaybe<FolderCategoriesFieldInput>;
  files?: InputMaybe<FolderFilesFieldInput>;
  cabinet?: InputMaybe<FolderCabinetFieldInput>;
};

export type FolderDeleteInput = {
  categories?: InputMaybe<Array<FolderCategoriesDeleteFieldInput>>;
  files?: InputMaybe<Array<FolderFilesDeleteFieldInput>>;
  cabinet?: InputMaybe<FolderCabinetDeleteFieldInput>;
};

export type FolderDisconnectInput = {
  categories?: InputMaybe<Array<FolderCategoriesDisconnectFieldInput>>;
  files?: InputMaybe<Array<FolderFilesDisconnectFieldInput>>;
  cabinet?: InputMaybe<FolderCabinetDisconnectFieldInput>;
};

export type FolderFilesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<FolderFilesAggregateInput>>;
  OR?: InputMaybe<Array<FolderFilesAggregateInput>>;
  NOT?: InputMaybe<FolderFilesAggregateInput>;
  node?: InputMaybe<FolderFilesNodeAggregationWhereInput>;
};

export type FolderFilesConnectFieldInput = {
  where?: InputMaybe<FileConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<FileConnectInput>>;
};

export type FolderFilesConnectionSort = {
  node?: InputMaybe<FileSort>;
};

export type FolderFilesConnectionWhere = {
  AND?: InputMaybe<Array<FolderFilesConnectionWhere>>;
  OR?: InputMaybe<Array<FolderFilesConnectionWhere>>;
  NOT?: InputMaybe<FolderFilesConnectionWhere>;
  node?: InputMaybe<FileWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<FileWhere>;
};

export type FolderFilesConnectOrCreateFieldInput = {
  where: FileConnectOrCreateWhere;
  onCreate: FolderFilesConnectOrCreateFieldInputOnCreate;
};

export type FolderFilesConnectOrCreateFieldInputOnCreate = {
  node: FileOnCreateInput;
};

export type FolderFilesCreateFieldInput = {
  node: FileCreateInput;
};

export type FolderFilesDeleteFieldInput = {
  where?: InputMaybe<FolderFilesConnectionWhere>;
  delete?: InputMaybe<FileDeleteInput>;
};

export type FolderFilesDisconnectFieldInput = {
  where?: InputMaybe<FolderFilesConnectionWhere>;
  disconnect?: InputMaybe<FileDisconnectInput>;
};

export type FolderFilesFieldInput = {
  connectOrCreate?: InputMaybe<Array<FolderFilesConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<FolderFilesConnectFieldInput>>;
  create?: InputMaybe<Array<FolderFilesCreateFieldInput>>;
};

export type FolderFilesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FolderFilesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FolderFilesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<FolderFilesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type FolderFilesUpdateConnectionInput = {
  node?: InputMaybe<FileUpdateInput>;
};

export type FolderFilesUpdateFieldInput = {
  where?: InputMaybe<FolderFilesConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<FolderFilesConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<FolderFilesConnectFieldInput>>;
  disconnect?: InputMaybe<Array<FolderFilesDisconnectFieldInput>>;
  create?: InputMaybe<Array<FolderFilesCreateFieldInput>>;
  update?: InputMaybe<FolderFilesUpdateConnectionInput>;
  delete?: InputMaybe<Array<FolderFilesDeleteFieldInput>>;
};

export type FolderOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more FolderSort objects to sort Folders by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FolderSort>>;
};

export type FolderRelationInput = {
  categories?: InputMaybe<Array<FolderCategoriesCreateFieldInput>>;
  files?: InputMaybe<Array<FolderFilesCreateFieldInput>>;
  cabinet?: InputMaybe<FolderCabinetCreateFieldInput>;
};

/** Fields to sort Folders by. The order in which sorts are applied is not guaranteed when specifying many fields in one FolderSort object. */
export type FolderSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type FolderUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  categories?: InputMaybe<Array<FolderCategoriesUpdateFieldInput>>;
  files?: InputMaybe<Array<FolderFilesUpdateFieldInput>>;
  cabinet?: InputMaybe<FolderCabinetUpdateFieldInput>;
};

export type FolderWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<FolderWhere>>;
  AND?: InputMaybe<Array<FolderWhere>>;
  NOT?: InputMaybe<FolderWhere>;
  /** @deprecated Use `categories_SOME` instead. */
  categories?: InputMaybe<CategoryWhere>;
  /** @deprecated Use `categories_NONE` instead. */
  categories_NOT?: InputMaybe<CategoryWhere>;
  /** Return Folders where all of the related Categories match this filter */
  categories_ALL?: InputMaybe<CategoryWhere>;
  /** Return Folders where none of the related Categories match this filter */
  categories_NONE?: InputMaybe<CategoryWhere>;
  /** Return Folders where one of the related Categories match this filter */
  categories_SINGLE?: InputMaybe<CategoryWhere>;
  /** Return Folders where some of the related Categories match this filter */
  categories_SOME?: InputMaybe<CategoryWhere>;
  /** @deprecated Use `categoriesConnection_SOME` instead. */
  categoriesConnection?: InputMaybe<FolderCategoriesConnectionWhere>;
  /** @deprecated Use `categoriesConnection_NONE` instead. */
  categoriesConnection_NOT?: InputMaybe<FolderCategoriesConnectionWhere>;
  /** Return Folders where all of the related FolderCategoriesConnections match this filter */
  categoriesConnection_ALL?: InputMaybe<FolderCategoriesConnectionWhere>;
  /** Return Folders where none of the related FolderCategoriesConnections match this filter */
  categoriesConnection_NONE?: InputMaybe<FolderCategoriesConnectionWhere>;
  /** Return Folders where one of the related FolderCategoriesConnections match this filter */
  categoriesConnection_SINGLE?: InputMaybe<FolderCategoriesConnectionWhere>;
  /** Return Folders where some of the related FolderCategoriesConnections match this filter */
  categoriesConnection_SOME?: InputMaybe<FolderCategoriesConnectionWhere>;
  categoriesAggregate?: InputMaybe<FolderCategoriesAggregateInput>;
  /** @deprecated Use `files_SOME` instead. */
  files?: InputMaybe<FileWhere>;
  /** @deprecated Use `files_NONE` instead. */
  files_NOT?: InputMaybe<FileWhere>;
  /** Return Folders where all of the related Files match this filter */
  files_ALL?: InputMaybe<FileWhere>;
  /** Return Folders where none of the related Files match this filter */
  files_NONE?: InputMaybe<FileWhere>;
  /** Return Folders where one of the related Files match this filter */
  files_SINGLE?: InputMaybe<FileWhere>;
  /** Return Folders where some of the related Files match this filter */
  files_SOME?: InputMaybe<FileWhere>;
  /** @deprecated Use `filesConnection_SOME` instead. */
  filesConnection?: InputMaybe<FolderFilesConnectionWhere>;
  /** @deprecated Use `filesConnection_NONE` instead. */
  filesConnection_NOT?: InputMaybe<FolderFilesConnectionWhere>;
  /** Return Folders where all of the related FolderFilesConnections match this filter */
  filesConnection_ALL?: InputMaybe<FolderFilesConnectionWhere>;
  /** Return Folders where none of the related FolderFilesConnections match this filter */
  filesConnection_NONE?: InputMaybe<FolderFilesConnectionWhere>;
  /** Return Folders where one of the related FolderFilesConnections match this filter */
  filesConnection_SINGLE?: InputMaybe<FolderFilesConnectionWhere>;
  /** Return Folders where some of the related FolderFilesConnections match this filter */
  filesConnection_SOME?: InputMaybe<FolderFilesConnectionWhere>;
  filesAggregate?: InputMaybe<FolderFilesAggregateInput>;
  cabinet?: InputMaybe<CabinetWhere>;
  cabinet_NOT?: InputMaybe<CabinetWhere>;
  cabinetConnection?: InputMaybe<FolderCabinetConnectionWhere>;
  cabinetConnection_NOT?: InputMaybe<FolderCabinetConnectionWhere>;
  cabinetAggregate?: InputMaybe<FolderCabinetAggregateInput>;
};

export type MeCreateInput = {
  myId: Scalars["ID"]["input"];
  roles: Array<Scalars["String"]["input"]>;
};

export type MeOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more MeSort objects to sort Us by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MeSort>>;
};

/** Fields to sort Us by. The order in which sorts are applied is not guaranteed when specifying many fields in one MeSort object. */
export type MeSort = {
  myId?: InputMaybe<SortDirection>;
};

export type MeUpdateInput = {
  myId?: InputMaybe<Scalars["ID"]["input"]>;
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  roles_POP?: InputMaybe<Scalars["Int"]["input"]>;
  roles_PUSH?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type MeWhere = {
  myId?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  myId_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  myId_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  myId_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  myId_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  myId_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  myId_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  myId_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  myId_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  myId_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  roles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  roles_NOT?: InputMaybe<Array<Scalars["String"]["input"]>>;
  roles_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  roles_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<MeWhere>>;
  AND?: InputMaybe<Array<MeWhere>>;
  NOT?: InputMaybe<MeWhere>;
};

export type UserCabinetsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserCabinetsAggregateInput>>;
  OR?: InputMaybe<Array<UserCabinetsAggregateInput>>;
  NOT?: InputMaybe<UserCabinetsAggregateInput>;
  node?: InputMaybe<UserCabinetsNodeAggregationWhereInput>;
};

export type UserCabinetsConnectFieldInput = {
  where?: InputMaybe<CabinetConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<CabinetConnectInput>>;
};

export type UserCabinetsConnectionSort = {
  node?: InputMaybe<CabinetSort>;
};

export type UserCabinetsConnectionWhere = {
  AND?: InputMaybe<Array<UserCabinetsConnectionWhere>>;
  OR?: InputMaybe<Array<UserCabinetsConnectionWhere>>;
  NOT?: InputMaybe<UserCabinetsConnectionWhere>;
  node?: InputMaybe<CabinetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CabinetWhere>;
};

export type UserCabinetsCreateFieldInput = {
  node: CabinetCreateInput;
};

export type UserCabinetsDeleteFieldInput = {
  where?: InputMaybe<UserCabinetsConnectionWhere>;
  delete?: InputMaybe<CabinetDeleteInput>;
};

export type UserCabinetsDisconnectFieldInput = {
  where?: InputMaybe<UserCabinetsConnectionWhere>;
  disconnect?: InputMaybe<CabinetDisconnectInput>;
};

export type UserCabinetsFieldInput = {
  connect?: InputMaybe<Array<UserCabinetsConnectFieldInput>>;
  create?: InputMaybe<Array<UserCabinetsCreateFieldInput>>;
};

export type UserCabinetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserCabinetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserCabinetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserCabinetsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserCabinetsUpdateConnectionInput = {
  node?: InputMaybe<CabinetUpdateInput>;
};

export type UserCabinetsUpdateFieldInput = {
  where?: InputMaybe<UserCabinetsConnectionWhere>;
  connect?: InputMaybe<Array<UserCabinetsConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserCabinetsDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserCabinetsCreateFieldInput>>;
  update?: InputMaybe<UserCabinetsUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserCabinetsDeleteFieldInput>>;
};

export type UserConnectInput = {
  cabinets?: InputMaybe<Array<UserCabinetsConnectFieldInput>>;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  cabinets?: InputMaybe<UserCabinetsFieldInput>;
};

export type UserDeleteInput = {
  cabinets?: InputMaybe<Array<UserCabinetsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  cabinets?: InputMaybe<Array<UserCabinetsDisconnectFieldInput>>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
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
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  cabinets?: InputMaybe<Array<UserCabinetsUpdateFieldInput>>;
};

export type UserWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  /** @deprecated Use `cabinets_SOME` instead. */
  cabinets?: InputMaybe<CabinetWhere>;
  /** @deprecated Use `cabinets_NONE` instead. */
  cabinets_NOT?: InputMaybe<CabinetWhere>;
  /** Return Users where all of the related Cabinets match this filter */
  cabinets_ALL?: InputMaybe<CabinetWhere>;
  /** Return Users where none of the related Cabinets match this filter */
  cabinets_NONE?: InputMaybe<CabinetWhere>;
  /** Return Users where one of the related Cabinets match this filter */
  cabinets_SINGLE?: InputMaybe<CabinetWhere>;
  /** Return Users where some of the related Cabinets match this filter */
  cabinets_SOME?: InputMaybe<CabinetWhere>;
  /** @deprecated Use `cabinetsConnection_SOME` instead. */
  cabinetsConnection?: InputMaybe<UserCabinetsConnectionWhere>;
  /** @deprecated Use `cabinetsConnection_NONE` instead. */
  cabinetsConnection_NOT?: InputMaybe<UserCabinetsConnectionWhere>;
  /** Return Users where all of the related UserCabinetsConnections match this filter */
  cabinetsConnection_ALL?: InputMaybe<UserCabinetsConnectionWhere>;
  /** Return Users where none of the related UserCabinetsConnections match this filter */
  cabinetsConnection_NONE?: InputMaybe<UserCabinetsConnectionWhere>;
  /** Return Users where one of the related UserCabinetsConnections match this filter */
  cabinetsConnection_SINGLE?: InputMaybe<UserCabinetsConnectionWhere>;
  /** Return Users where some of the related UserCabinetsConnections match this filter */
  cabinetsConnection_SOME?: InputMaybe<UserCabinetsConnectionWhere>;
  cabinetsAggregate?: InputMaybe<UserCabinetsAggregateInput>;
};

export interface CabinetAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
}

export declare class CabinetModel {
  public find(args?: {
    where?: CabinetWhere;

    options?: CabinetOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Cabinet[]>;
  public create(args: {
    input: CabinetCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateCabinetsMutationResponse>;
  public update(args: {
    where?: CabinetWhere;
    update?: CabinetUpdateInput;
    connect?: CabinetConnectInput;
    disconnect?: CabinetDisconnectInput;
    create?: CabinetCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCabinetsMutationResponse>;
  public delete(args: {
    where?: CabinetWhere;
    delete?: CabinetDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CabinetWhere;

    aggregate: CabinetAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CabinetAggregateSelection>;
}

export interface CategoryAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
}

export declare class CategoryModel {
  public find(args?: {
    where?: CategoryWhere;

    options?: CategoryOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Category[]>;
  public create(args: {
    input: CategoryCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateCategoriesMutationResponse>;
  public update(args: {
    where?: CategoryWhere;
    update?: CategoryUpdateInput;
    connect?: CategoryConnectInput;
    disconnect?: CategoryDisconnectInput;
    create?: CategoryCreateInput;
    connectOrCreate?: CategoryConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCategoriesMutationResponse>;
  public delete(args: {
    where?: CategoryWhere;
    delete?: CategoryDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CategoryWhere;

    aggregate: CategoryAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CategoryAggregateSelection>;
}

export interface FileAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
}

export declare class FileModel {
  public find(args?: {
    where?: FileWhere;

    options?: FileOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<File[]>;
  public create(args: {
    input: FileCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateFilesMutationResponse>;
  public update(args: {
    where?: FileWhere;
    update?: FileUpdateInput;
    connect?: FileConnectInput;
    disconnect?: FileDisconnectInput;
    create?: FileCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateFilesMutationResponse>;
  public delete(args: {
    where?: FileWhere;
    delete?: FileDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: FileWhere;

    aggregate: FileAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<FileAggregateSelection>;
}

export interface FolderAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
}

export declare class FolderModel {
  public find(args?: {
    where?: FolderWhere;

    options?: FolderOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Folder[]>;
  public create(args: {
    input: FolderCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateFoldersMutationResponse>;
  public update(args: {
    where?: FolderWhere;
    update?: FolderUpdateInput;
    connect?: FolderConnectInput;
    disconnect?: FolderDisconnectInput;
    create?: FolderCreateInput;
    connectOrCreate?: FolderConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateFoldersMutationResponse>;
  public delete(args: {
    where?: FolderWhere;
    delete?: FolderDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: FolderWhere;

    aggregate: FolderAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<FolderAggregateSelection>;
}

export interface MeAggregateSelectionInput {
  count?: boolean;
  myId?: boolean;
}

export declare class MeModel {
  public find(args?: {
    where?: MeWhere;

    options?: MeOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Me[]>;
  public create(args: {
    input: MeCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsMutationResponse>;
  public update(args: {
    where?: MeWhere;
    update?: MeUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsMutationResponse>;
  public delete(args: {
    where?: MeWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MeWhere;

    aggregate: MeAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MeAggregateSelection>;
}

export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: boolean;
  name?: boolean;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface ModelMap {
  Cabinet: CabinetModel;
  Category: CategoryModel;
  File: FileModel;
  Folder: FolderModel;
  Me: MeModel;
  User: UserModel;
}
