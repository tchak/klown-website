import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  readonly count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  readonly backgroundVideoCategory: ReadonlyArray<Category>;
  readonly backgroundVideoShortCategory: ReadonlyArray<Category>;
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Asset>;
  /** The file name */
  readonly fileName: Scalars['String'];
  /** The file handle */
  readonly handle: Scalars['String'];
  /** The height of the file */
  readonly height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** System Locale field */
  readonly locale: Locale;
  /** Get the other localizations for this document */
  readonly localizations: ReadonlyArray<Asset>;
  /** The mime type of the file */
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly photosPiece: ReadonlyArray<Piece>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  /** The file size */
  readonly size?: Maybe<Scalars['Float']>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  readonly url: Scalars['String'];
  /** The file width */
  readonly width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetBackgroundVideoCategoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


/** Asset system model */
export type AssetBackgroundVideoShortCategoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: ReadonlyArray<Locale>;
};


/** Asset system model */
export type AssetPhotosPieceArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<PieceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PieceWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<AssetEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type AssetCreateInput = {
  readonly backgroundVideoCategory?: InputMaybe<CategoryCreateManyInlineInput>;
  readonly backgroundVideoShortCategory?: InputMaybe<CategoryCreateManyInlineInput>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly fileName: Scalars['String'];
  readonly handle: Scalars['String'];
  readonly height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly photosPiece?: InputMaybe<PieceCreateManyInlineInput>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly fileName: Scalars['String'];
  readonly handle: Scalars['String'];
  readonly height?: InputMaybe<Scalars['Float']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  readonly data: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  readonly connect?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  readonly connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  readonly create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly backgroundVideoCategory_every?: InputMaybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_none?: InputMaybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_some?: InputMaybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_every?: InputMaybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_none?: InputMaybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_some?: InputMaybe<CategoryWhereInput>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly photosPiece_every?: InputMaybe<PieceWhereInput>;
  readonly photosPiece_none?: InputMaybe<PieceWhereInput>;
  readonly photosPiece_some?: InputMaybe<PieceWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  readonly document?: InputMaybe<DocumentTransformationInput>;
  readonly image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  readonly validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  readonly backgroundVideoCategory?: InputMaybe<CategoryUpdateManyInlineInput>;
  readonly backgroundVideoShortCategory?: InputMaybe<CategoryUpdateManyInlineInput>;
  readonly fileName?: InputMaybe<Scalars['String']>;
  readonly handle?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  readonly localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly photosPiece?: InputMaybe<PieceUpdateManyInlineInput>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  readonly fileName?: InputMaybe<Scalars['String']>;
  readonly handle?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Float']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  readonly data: AssetUpdateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  readonly delete?: InputMaybe<ReadonlyArray<Locale>>;
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateLocalizationInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  readonly connect?: InputMaybe<ReadonlyArray<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  readonly create?: InputMaybe<ReadonlyArray<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  readonly delete?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  readonly set?: InputMaybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  readonly upsert?: InputMaybe<ReadonlyArray<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  readonly fileName?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  readonly localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  readonly fileName?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Float']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  readonly size?: InputMaybe<Scalars['Float']>;
  readonly width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  readonly data: AssetUpdateManyLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  readonly update?: InputMaybe<ReadonlyArray<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: AssetUpdateManyInput;
  /** Document search */
  readonly where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  readonly connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  readonly create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  readonly update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  readonly upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: AssetUpdateInput;
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: AssetCreateInput;
  /** Update document if it exists */
  readonly update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  readonly create: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
  readonly update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: AssetUpsertInput;
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly backgroundVideoCategory_every?: InputMaybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_none?: InputMaybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_some?: InputMaybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_every?: InputMaybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_none?: InputMaybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_some?: InputMaybe<CategoryWhereInput>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  readonly fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly fileName_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly fileName_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly fileName_starts_with?: InputMaybe<Scalars['String']>;
  readonly handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly handle_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly handle_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly handle_starts_with?: InputMaybe<Scalars['String']>;
  readonly height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly height_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  readonly height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  readonly height_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly mimeType_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly mimeType_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly mimeType_starts_with?: InputMaybe<Scalars['String']>;
  readonly photosPiece_every?: InputMaybe<PieceWhereInput>;
  readonly photosPiece_none?: InputMaybe<PieceWhereInput>;
  readonly photosPiece_some?: InputMaybe<PieceWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly size_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  readonly size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  readonly size_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
  readonly width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly width_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  readonly width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  readonly width_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  readonly count: Scalars['Long'];
};

export type Category = Node & {
  readonly backgroundVideo?: Maybe<Asset>;
  readonly backgroundVideoShort?: Maybe<Asset>;
  readonly color: PageColor;
  readonly content?: Maybe<RichText>;
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  readonly description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Category>;
  /** List of Category versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly pieces: ReadonlyArray<Piece>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  readonly slug: Scalars['String'];
  /** System stage field */
  readonly stage: Stage;
  readonly title: Scalars['String'];
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};


export type CategoryBackgroundVideoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


export type CategoryBackgroundVideoShortArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


export type CategoryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};


export type CategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CategoryPiecesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<PieceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PieceWhereInput>;
};


export type CategoryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CategoryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: CategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<CategoryEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type CategoryCreateInput = {
  readonly backgroundVideo?: InputMaybe<AssetCreateOneInlineInput>;
  readonly backgroundVideoShort?: InputMaybe<AssetCreateOneInlineInput>;
  readonly color: PageColor;
  readonly content?: InputMaybe<Scalars['RichTextAST']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly pieces?: InputMaybe<PieceCreateManyInlineInput>;
  readonly slug: Scalars['String'];
  readonly title: Scalars['String'];
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  readonly connect?: InputMaybe<ReadonlyArray<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  readonly create?: InputMaybe<ReadonlyArray<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  readonly connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  readonly create?: InputMaybe<CategoryCreateInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Category;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly backgroundVideo?: InputMaybe<AssetWhereInput>;
  readonly backgroundVideoShort?: InputMaybe<AssetWhereInput>;
  readonly color?: InputMaybe<PageColor>;
  /** All values that are contained in given list. */
  readonly color_in?: InputMaybe<ReadonlyArray<InputMaybe<PageColor>>>;
  /** All values that are not equal to given value. */
  readonly color_not?: InputMaybe<PageColor>;
  /** All values that are not contained in given list. */
  readonly color_not_in?: InputMaybe<ReadonlyArray<InputMaybe<PageColor>>>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly pieces_every?: InputMaybe<PieceWhereInput>;
  readonly pieces_none?: InputMaybe<PieceWhereInput>;
  readonly pieces_some?: InputMaybe<PieceWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CategoryUpdateInput = {
  readonly backgroundVideo?: InputMaybe<AssetUpdateOneInlineInput>;
  readonly backgroundVideoShort?: InputMaybe<AssetUpdateOneInlineInput>;
  readonly color?: InputMaybe<PageColor>;
  readonly content?: InputMaybe<Scalars['RichTextAST']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly pieces?: InputMaybe<PieceUpdateManyInlineInput>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  readonly connect?: InputMaybe<ReadonlyArray<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  readonly create?: InputMaybe<ReadonlyArray<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  readonly delete?: InputMaybe<ReadonlyArray<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  readonly set?: InputMaybe<ReadonlyArray<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  readonly update?: InputMaybe<ReadonlyArray<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  readonly upsert?: InputMaybe<ReadonlyArray<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  readonly color?: InputMaybe<PageColor>;
  readonly content?: InputMaybe<Scalars['RichTextAST']>;
  readonly description?: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: CategoryUpdateManyInput;
  /** Document search */
  readonly where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  readonly connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  readonly create?: InputMaybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Category document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Category document */
  readonly update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  readonly upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: CategoryUpdateInput;
  /** Unique document search */
  readonly where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: CategoryCreateInput;
  /** Update document if it exists */
  readonly update: CategoryUpdateInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: CategoryUpsertInput;
  /** Unique document search */
  readonly where: CategoryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly backgroundVideo?: InputMaybe<AssetWhereInput>;
  readonly backgroundVideoShort?: InputMaybe<AssetWhereInput>;
  readonly color?: InputMaybe<PageColor>;
  /** All values that are contained in given list. */
  readonly color_in?: InputMaybe<ReadonlyArray<InputMaybe<PageColor>>>;
  /** All values that are not equal to given value. */
  readonly color_not?: InputMaybe<PageColor>;
  /** All values that are not contained in given list. */
  readonly color_not_in?: InputMaybe<ReadonlyArray<InputMaybe<PageColor>>>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly pieces_every?: InputMaybe<PieceWhereInput>;
  readonly pieces_none?: InputMaybe<PieceWhereInput>;
  readonly pieces_some?: InputMaybe<PieceWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<CategoryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<CategoryWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<CategoryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<CategoryWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  readonly css: Scalars['String'];
  readonly hex: Scalars['Hex'];
  readonly rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  readonly hex?: InputMaybe<Scalars['Hex']>;
  readonly rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  readonly after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  readonly before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  readonly end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  readonly start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  readonly format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  readonly output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  readonly createdAt: Scalars['DateTime'];
  readonly data?: Maybe<Scalars['Json']>;
  readonly id: Scalars['ID'];
  readonly revision: Scalars['Int'];
  readonly stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  readonly fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  readonly resize?: InputMaybe<ImageResizeInput>;
};

export type Info = Node & {
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Info>;
  /** List of Info versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly presentation?: Maybe<RichText>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};


export type InfoCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


export type InfoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};


export type InfoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type InfoPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


export type InfoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type InfoUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type InfoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: InfoWhereUniqueInput;
};

/** A connection to a list of items. */
export type InfoConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<InfoEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type InfoCreateInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly presentation?: InputMaybe<Scalars['RichTextAST']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type InfoCreateManyInlineInput = {
  /** Connect multiple existing Info documents */
  readonly connect?: InputMaybe<ReadonlyArray<InfoWhereUniqueInput>>;
  /** Create and connect multiple existing Info documents */
  readonly create?: InputMaybe<ReadonlyArray<InfoCreateInput>>;
};

export type InfoCreateOneInlineInput = {
  /** Connect one existing Info document */
  readonly connect?: InputMaybe<InfoWhereUniqueInput>;
  /** Create and connect one Info document */
  readonly create?: InputMaybe<InfoCreateInput>;
};

/** An edge in a connection. */
export type InfoEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Info;
};

/** Identifies documents */
export type InfoManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<InfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<InfoWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<InfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<InfoWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<InfoWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<InfoWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum InfoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type InfoUpdateInput = {
  readonly presentation?: InputMaybe<Scalars['RichTextAST']>;
};

export type InfoUpdateManyInlineInput = {
  /** Connect multiple existing Info documents */
  readonly connect?: InputMaybe<ReadonlyArray<InfoConnectInput>>;
  /** Create and connect multiple Info documents */
  readonly create?: InputMaybe<ReadonlyArray<InfoCreateInput>>;
  /** Delete multiple Info documents */
  readonly delete?: InputMaybe<ReadonlyArray<InfoWhereUniqueInput>>;
  /** Disconnect multiple Info documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<InfoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Info documents */
  readonly set?: InputMaybe<ReadonlyArray<InfoWhereUniqueInput>>;
  /** Update multiple Info documents */
  readonly update?: InputMaybe<ReadonlyArray<InfoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Info documents */
  readonly upsert?: InputMaybe<ReadonlyArray<InfoUpsertWithNestedWhereUniqueInput>>;
};

export type InfoUpdateManyInput = {
  readonly presentation?: InputMaybe<Scalars['RichTextAST']>;
};

export type InfoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: InfoUpdateManyInput;
  /** Document search */
  readonly where: InfoWhereInput;
};

export type InfoUpdateOneInlineInput = {
  /** Connect existing Info document */
  readonly connect?: InputMaybe<InfoWhereUniqueInput>;
  /** Create and connect one Info document */
  readonly create?: InputMaybe<InfoCreateInput>;
  /** Delete currently connected Info document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Info document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Info document */
  readonly update?: InputMaybe<InfoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Info document */
  readonly upsert?: InputMaybe<InfoUpsertWithNestedWhereUniqueInput>;
};

export type InfoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: InfoUpdateInput;
  /** Unique document search */
  readonly where: InfoWhereUniqueInput;
};

export type InfoUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: InfoCreateInput;
  /** Update document if it exists */
  readonly update: InfoUpdateInput;
};

export type InfoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: InfoUpsertInput;
  /** Unique document search */
  readonly where: InfoWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type InfoWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type InfoWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<InfoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<InfoWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<InfoWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly documentInStages_every?: InputMaybe<InfoWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<InfoWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<InfoWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type InfoWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<InfoWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<InfoWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<InfoWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<InfoWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References Info record uniquely */
export type InfoWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  Fr = 'fr'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  readonly distance: Scalars['Float'];
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
};

export type Mutation = {
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  readonly createAsset?: Maybe<Asset>;
  /** Create one category */
  readonly createCategory?: Maybe<Category>;
  /** Create one info */
  readonly createInfo?: Maybe<Info>;
  /** Create one piece */
  readonly createPiece?: Maybe<Piece>;
  /** Create one scheduledRelease */
  readonly createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  readonly deleteAsset?: Maybe<Asset>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  readonly deleteCategory?: Maybe<Category>;
  /** Delete one info from _all_ existing stages. Returns deleted document. */
  readonly deleteInfo?: Maybe<Info>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  readonly deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  readonly deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  readonly deleteManyCategories: BatchPayload;
  /** Delete many Category documents, return deleted documents */
  readonly deleteManyCategoriesConnection: CategoryConnection;
  /**
   * Delete many Info documents
   * @deprecated Please use the new paginated many mutation (deleteManyInfosConnection)
   */
  readonly deleteManyInfos: BatchPayload;
  /** Delete many Info documents, return deleted documents */
  readonly deleteManyInfosConnection: InfoConnection;
  /**
   * Delete many Piece documents
   * @deprecated Please use the new paginated many mutation (deleteManyPiecesConnection)
   */
  readonly deleteManyPieces: BatchPayload;
  /** Delete many Piece documents, return deleted documents */
  readonly deleteManyPiecesConnection: PieceConnection;
  /** Delete one piece from _all_ existing stages. Returns deleted document. */
  readonly deletePiece?: Maybe<Piece>;
  /** Delete and return scheduled operation */
  readonly deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  readonly deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  readonly publishAsset?: Maybe<Asset>;
  /** Publish one category */
  readonly publishCategory?: Maybe<Category>;
  /** Publish one info */
  readonly publishInfo?: Maybe<Info>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  readonly publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  readonly publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  readonly publishManyCategories: BatchPayload;
  /** Publish many Category documents */
  readonly publishManyCategoriesConnection: CategoryConnection;
  /**
   * Publish many Info documents
   * @deprecated Please use the new paginated many mutation (publishManyInfosConnection)
   */
  readonly publishManyInfos: BatchPayload;
  /** Publish many Info documents */
  readonly publishManyInfosConnection: InfoConnection;
  /**
   * Publish many Piece documents
   * @deprecated Please use the new paginated many mutation (publishManyPiecesConnection)
   */
  readonly publishManyPieces: BatchPayload;
  /** Publish many Piece documents */
  readonly publishManyPiecesConnection: PieceConnection;
  /** Publish one piece */
  readonly publishPiece?: Maybe<Piece>;
  /** Schedule to publish one asset */
  readonly schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one category */
  readonly schedulePublishCategory?: Maybe<Category>;
  /** Schedule to publish one info */
  readonly schedulePublishInfo?: Maybe<Info>;
  /** Schedule to publish one piece */
  readonly schedulePublishPiece?: Maybe<Piece>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishCategory?: Maybe<Category>;
  /** Unpublish one info from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishInfo?: Maybe<Info>;
  /** Unpublish one piece from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly scheduleUnpublishPiece?: Maybe<Piece>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishAsset?: Maybe<Asset>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishCategory?: Maybe<Category>;
  /** Unpublish one info from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishInfo?: Maybe<Info>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  readonly unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  readonly unpublishManyCategories: BatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Unpublish many Info documents
   * @deprecated Please use the new paginated many mutation (unpublishManyInfosConnection)
   */
  readonly unpublishManyInfos: BatchPayload;
  /** Find many Info documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyInfosConnection: InfoConnection;
  /**
   * Unpublish many Piece documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPiecesConnection)
   */
  readonly unpublishManyPieces: BatchPayload;
  /** Find many Piece documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyPiecesConnection: PieceConnection;
  /** Unpublish one piece from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishPiece?: Maybe<Piece>;
  /** Update one asset */
  readonly updateAsset?: Maybe<Asset>;
  /** Update one category */
  readonly updateCategory?: Maybe<Category>;
  /** Update one info */
  readonly updateInfo?: Maybe<Info>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  readonly updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  readonly updateManyAssetsConnection: AssetConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  readonly updateManyCategories: BatchPayload;
  /** Update many Category documents */
  readonly updateManyCategoriesConnection: CategoryConnection;
  /**
   * Update many infos
   * @deprecated Please use the new paginated many mutation (updateManyInfosConnection)
   */
  readonly updateManyInfos: BatchPayload;
  /** Update many Info documents */
  readonly updateManyInfosConnection: InfoConnection;
  /**
   * Update many pieces
   * @deprecated Please use the new paginated many mutation (updateManyPiecesConnection)
   */
  readonly updateManyPieces: BatchPayload;
  /** Update many Piece documents */
  readonly updateManyPiecesConnection: PieceConnection;
  /** Update one piece */
  readonly updatePiece?: Maybe<Piece>;
  /** Update one scheduledRelease */
  readonly updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  readonly upsertAsset?: Maybe<Asset>;
  /** Upsert one category */
  readonly upsertCategory?: Maybe<Category>;
  /** Upsert one info */
  readonly upsertInfo?: Maybe<Info>;
  /** Upsert one piece */
  readonly upsertPiece?: Maybe<Piece>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateInfoArgs = {
  data: InfoCreateInput;
};


export type MutationCreatePieceArgs = {
  data: PieceCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteInfoArgs = {
  where: InfoWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyInfosArgs = {
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationDeleteManyInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationDeleteManyPiecesArgs = {
  where?: InputMaybe<PieceManyWhereInput>;
};


export type MutationDeleteManyPiecesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PieceManyWhereInput>;
};


export type MutationDeletePieceArgs = {
  where: PieceWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCategoryArgs = {
  to?: ReadonlyArray<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationPublishInfoArgs = {
  to?: ReadonlyArray<Stage>;
  where: InfoWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCategoriesArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationPublishManyInfosArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationPublishManyInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationPublishManyPiecesArgs = {
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<PieceManyWhereInput>;
};


export type MutationPublishManyPiecesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: InputMaybe<PieceManyWhereInput>;
};


export type MutationPublishPieceArgs = {
  to?: ReadonlyArray<Stage>;
  where: PieceWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: ReadonlyArray<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCategoryArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: ReadonlyArray<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationSchedulePublishInfoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: ReadonlyArray<Stage>;
  where: InfoWhereUniqueInput;
};


export type MutationSchedulePublishPieceArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: ReadonlyArray<Stage>;
  where: PieceWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCategoryArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishInfoArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: InfoWhereUniqueInput;
};


export type MutationScheduleUnpublishPieceArgs = {
  from?: ReadonlyArray<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PieceWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCategoryArgs = {
  from?: ReadonlyArray<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationUnpublishInfoArgs = {
  from?: ReadonlyArray<Stage>;
  where: InfoWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCategoriesArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyInfosArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationUnpublishManyInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationUnpublishManyPiecesArgs = {
  from?: ReadonlyArray<Stage>;
  where?: InputMaybe<PieceManyWhereInput>;
};


export type MutationUnpublishManyPiecesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PieceManyWhereInput>;
};


export type MutationUnpublishPieceArgs = {
  from?: ReadonlyArray<Stage>;
  where: PieceWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateInfoArgs = {
  data: InfoUpdateInput;
  where: InfoWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyInfosArgs = {
  data: InfoUpdateManyInput;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationUpdateManyInfosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: InfoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InfoManyWhereInput>;
};


export type MutationUpdateManyPiecesArgs = {
  data: PieceUpdateManyInput;
  where?: InputMaybe<PieceManyWhereInput>;
};


export type MutationUpdateManyPiecesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PieceUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PieceManyWhereInput>;
};


export type MutationUpdatePieceArgs = {
  data: PieceUpdateInput;
  where: PieceWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertInfoArgs = {
  upsert: InfoUpsertInput;
  where: InfoWhereUniqueInput;
};


export type MutationUpsertPieceArgs = {
  upsert: PieceUpsertInput;
  where: PieceWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  readonly id: Scalars['ID'];
  /** The Stage of an object */
  readonly stage: Stage;
};

export enum PageColor {
  Kw = 'kw',
  Rw = 'rw',
  Wk = 'wk',
  Wr = 'wr'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  readonly pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['String']>;
};

export type Piece = Node & {
  readonly category?: Maybe<Category>;
  readonly content?: Maybe<RichText>;
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  readonly description?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Piece>;
  readonly duration?: Maybe<Scalars['String']>;
  /** List of Piece versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly images: ReadonlyArray<Asset>;
  readonly location?: Maybe<Scalars['String']>;
  readonly participants: ReadonlyArray<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly related: ReadonlyArray<Piece>;
  readonly relatedFrom: ReadonlyArray<Piece>;
  readonly scheduledIn: ReadonlyArray<ScheduledOperation>;
  readonly slug: Scalars['String'];
  /** System stage field */
  readonly stage: Stage;
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly technique?: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly type: PieceType;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};


export type PieceCategoryArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


export type PieceCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


export type PieceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};


export type PieceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PieceImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type PiecePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


export type PieceRelatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<PieceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PieceWhereInput>;
};


export type PieceRelatedFromArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<PieceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PieceWhereInput>;
};


export type PieceScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PieceUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type PieceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: PieceWhereUniqueInput;
};

/** A connection to a list of items. */
export type PieceConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<PieceEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type PieceCreateInput = {
  readonly category?: InputMaybe<CategoryCreateOneInlineInput>;
  readonly content?: InputMaybe<Scalars['RichTextAST']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly dimensions?: InputMaybe<Scalars['String']>;
  readonly duration?: InputMaybe<Scalars['String']>;
  readonly images?: InputMaybe<AssetCreateManyInlineInput>;
  readonly location?: InputMaybe<Scalars['String']>;
  readonly participants?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly related?: InputMaybe<PieceCreateManyInlineInput>;
  readonly relatedFrom?: InputMaybe<PieceCreateManyInlineInput>;
  readonly slug: Scalars['String'];
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly technique?: InputMaybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly type: PieceType;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PieceCreateManyInlineInput = {
  /** Connect multiple existing Piece documents */
  readonly connect?: InputMaybe<ReadonlyArray<PieceWhereUniqueInput>>;
  /** Create and connect multiple existing Piece documents */
  readonly create?: InputMaybe<ReadonlyArray<PieceCreateInput>>;
};

export type PieceCreateOneInlineInput = {
  /** Connect one existing Piece document */
  readonly connect?: InputMaybe<PieceWhereUniqueInput>;
  /** Create and connect one Piece document */
  readonly create?: InputMaybe<PieceCreateInput>;
};

/** An edge in a connection. */
export type PieceEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Piece;
};

/** Identifies documents */
export type PieceManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<PieceWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly category?: InputMaybe<CategoryWhereInput>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly dimensions?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly dimensions_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly dimensions_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly dimensions_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly dimensions_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly dimensions_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly dimensions_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly dimensions_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly dimensions_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly dimensions_starts_with?: InputMaybe<Scalars['String']>;
  readonly documentInStages_every?: InputMaybe<PieceWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<PieceWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<PieceWhereStageInput>;
  readonly duration?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly duration_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly duration_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly duration_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly duration_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly duration_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly duration_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly duration_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly duration_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly duration_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly images_every?: InputMaybe<AssetWhereInput>;
  readonly images_none?: InputMaybe<AssetWhereInput>;
  readonly images_some?: InputMaybe<AssetWhereInput>;
  readonly location?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly location_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly location_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly location_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly location_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly location_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly location_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly location_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly location_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly location_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly participants?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly participants_contains_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly participants_contains_none?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly participants_contains_some?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly participants_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly relatedFrom_every?: InputMaybe<PieceWhereInput>;
  readonly relatedFrom_none?: InputMaybe<PieceWhereInput>;
  readonly relatedFrom_some?: InputMaybe<PieceWhereInput>;
  readonly related_every?: InputMaybe<PieceWhereInput>;
  readonly related_none?: InputMaybe<PieceWhereInput>;
  readonly related_some?: InputMaybe<PieceWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly tags_contains_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly tags_contains_none?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly tags_contains_some?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly tags_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly technique?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly technique_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly technique_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly technique_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly technique_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly technique_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly technique_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly technique_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly technique_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly technique_starts_with?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<PieceType>;
  /** All values that are contained in given list. */
  readonly type_in?: InputMaybe<ReadonlyArray<InputMaybe<PieceType>>>;
  /** All values that are not equal to given value. */
  readonly type_not?: InputMaybe<PieceType>;
  /** All values that are not contained in given list. */
  readonly type_not_in?: InputMaybe<ReadonlyArray<InputMaybe<PieceType>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PieceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DimensionsAsc = 'dimensions_ASC',
  DimensionsDesc = 'dimensions_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  ParticipantsAsc = 'participants_ASC',
  ParticipantsDesc = 'participants_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TechniqueAsc = 'technique_ASC',
  TechniqueDesc = 'technique_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum PieceType {
  Installation = 'Installation',
  Painting = 'Painting',
  Photo = 'Photo',
  Video = 'Video'
}

export type PieceUpdateInput = {
  readonly category?: InputMaybe<CategoryUpdateOneInlineInput>;
  readonly content?: InputMaybe<Scalars['RichTextAST']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly dimensions?: InputMaybe<Scalars['String']>;
  readonly duration?: InputMaybe<Scalars['String']>;
  readonly images?: InputMaybe<AssetUpdateManyInlineInput>;
  readonly location?: InputMaybe<Scalars['String']>;
  readonly participants?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly related?: InputMaybe<PieceUpdateManyInlineInput>;
  readonly relatedFrom?: InputMaybe<PieceUpdateManyInlineInput>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly technique?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<PieceType>;
};

export type PieceUpdateManyInlineInput = {
  /** Connect multiple existing Piece documents */
  readonly connect?: InputMaybe<ReadonlyArray<PieceConnectInput>>;
  /** Create and connect multiple Piece documents */
  readonly create?: InputMaybe<ReadonlyArray<PieceCreateInput>>;
  /** Delete multiple Piece documents */
  readonly delete?: InputMaybe<ReadonlyArray<PieceWhereUniqueInput>>;
  /** Disconnect multiple Piece documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<PieceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Piece documents */
  readonly set?: InputMaybe<ReadonlyArray<PieceWhereUniqueInput>>;
  /** Update multiple Piece documents */
  readonly update?: InputMaybe<ReadonlyArray<PieceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Piece documents */
  readonly upsert?: InputMaybe<ReadonlyArray<PieceUpsertWithNestedWhereUniqueInput>>;
};

export type PieceUpdateManyInput = {
  readonly content?: InputMaybe<Scalars['RichTextAST']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly dimensions?: InputMaybe<Scalars['String']>;
  readonly duration?: InputMaybe<Scalars['String']>;
  readonly location?: InputMaybe<Scalars['String']>;
  readonly participants?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly technique?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<PieceType>;
};

export type PieceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: PieceUpdateManyInput;
  /** Document search */
  readonly where: PieceWhereInput;
};

export type PieceUpdateOneInlineInput = {
  /** Connect existing Piece document */
  readonly connect?: InputMaybe<PieceWhereUniqueInput>;
  /** Create and connect one Piece document */
  readonly create?: InputMaybe<PieceCreateInput>;
  /** Delete currently connected Piece document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Piece document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Piece document */
  readonly update?: InputMaybe<PieceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Piece document */
  readonly upsert?: InputMaybe<PieceUpsertWithNestedWhereUniqueInput>;
};

export type PieceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: PieceUpdateInput;
  /** Unique document search */
  readonly where: PieceWhereUniqueInput;
};

export type PieceUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: PieceCreateInput;
  /** Update document if it exists */
  readonly update: PieceUpdateInput;
};

export type PieceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: PieceUpsertInput;
  /** Unique document search */
  readonly where: PieceWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PieceWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PieceWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<PieceWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly category?: InputMaybe<CategoryWhereInput>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly dimensions?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly dimensions_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly dimensions_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly dimensions_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly dimensions_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly dimensions_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly dimensions_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly dimensions_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly dimensions_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly dimensions_starts_with?: InputMaybe<Scalars['String']>;
  readonly documentInStages_every?: InputMaybe<PieceWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<PieceWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<PieceWhereStageInput>;
  readonly duration?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly duration_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly duration_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly duration_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly duration_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly duration_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly duration_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly duration_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly duration_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly duration_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly images_every?: InputMaybe<AssetWhereInput>;
  readonly images_none?: InputMaybe<AssetWhereInput>;
  readonly images_some?: InputMaybe<AssetWhereInput>;
  readonly location?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly location_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly location_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly location_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly location_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly location_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly location_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly location_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly location_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly location_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly participants?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly participants_contains_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly participants_contains_none?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly participants_contains_some?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly participants_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly relatedFrom_every?: InputMaybe<PieceWhereInput>;
  readonly relatedFrom_none?: InputMaybe<PieceWhereInput>;
  readonly relatedFrom_some?: InputMaybe<PieceWhereInput>;
  readonly related_every?: InputMaybe<PieceWhereInput>;
  readonly related_none?: InputMaybe<PieceWhereInput>;
  readonly related_some?: InputMaybe<PieceWhereInput>;
  readonly scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: InputMaybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly tags?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly tags_contains_all?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly tags_contains_none?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly tags_contains_some?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly tags_not?: InputMaybe<ReadonlyArray<Scalars['String']>>;
  readonly technique?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly technique_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly technique_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly technique_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly technique_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly technique_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly technique_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly technique_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly technique_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly technique_starts_with?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<PieceType>;
  /** All values that are contained in given list. */
  readonly type_in?: InputMaybe<ReadonlyArray<InputMaybe<PieceType>>>;
  /** All values that are not equal to given value. */
  readonly type_not?: InputMaybe<PieceType>;
  /** All values that are not contained in given list. */
  readonly type_not_in?: InputMaybe<ReadonlyArray<InputMaybe<PieceType>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PieceWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<PieceWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<PieceWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<PieceWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<PieceWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References Piece record uniquely */
export type PieceWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  readonly locale: Locale;
  /** Stages to publish selected locales to */
  readonly stages: ReadonlyArray<Stage>;
};

export type Query = {
  /** Retrieve a single asset */
  readonly asset?: Maybe<Asset>;
  /** Retrieve document version */
  readonly assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  readonly assets: ReadonlyArray<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  readonly assetsConnection: AssetConnection;
  /** Retrieve multiple categories */
  readonly categories: ReadonlyArray<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  readonly categoriesConnection: CategoryConnection;
  /** Retrieve a single category */
  readonly category?: Maybe<Category>;
  /** Retrieve document version */
  readonly categoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single info */
  readonly info?: Maybe<Info>;
  /** Retrieve document version */
  readonly infoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple infos */
  readonly infos: ReadonlyArray<Info>;
  /** Retrieve multiple infos using the Relay connection interface */
  readonly infosConnection: InfoConnection;
  /** Fetches an object given its ID */
  readonly node?: Maybe<Node>;
  /** Retrieve a single piece */
  readonly piece?: Maybe<Piece>;
  /** Retrieve document version */
  readonly pieceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pieces */
  readonly pieces: ReadonlyArray<Piece>;
  /** Retrieve multiple pieces using the Relay connection interface */
  readonly piecesConnection: PieceConnection;
  /** Retrieve a single scheduledOperation */
  readonly scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  readonly scheduledOperations: ReadonlyArray<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  readonly scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  readonly scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  readonly scheduledReleases: ReadonlyArray<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  readonly scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  readonly user?: Maybe<User>;
  /** Retrieve multiple users */
  readonly users: ReadonlyArray<User>;
  /** Retrieve multiple users using the Relay connection interface */
  readonly usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryInfoArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: InfoWhereUniqueInput;
};


export type QueryInfoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryInfosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<InfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<InfoWhereInput>;
};


export type QueryInfosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<InfoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<InfoWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
};


export type QueryPieceArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: PieceWhereUniqueInput;
};


export type QueryPieceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPiecesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<PieceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PieceWhereInput>;
};


export type QueryPiecesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<PieceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PieceWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  readonly a: Scalars['RGBATransparency'];
  readonly b: Scalars['RGBAHue'];
  readonly g: Scalars['RGBAHue'];
  readonly r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  readonly a: Scalars['RGBATransparency'];
  readonly b: Scalars['RGBAHue'];
  readonly g: Scalars['RGBAHue'];
  readonly r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns HTMl representation */
  readonly html: Scalars['String'];
  /** Returns Markdown representation */
  readonly markdown: Scalars['String'];
  /** Returns AST representation */
  readonly raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  readonly text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  readonly affectedDocuments: ReadonlyArray<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Operation description */
  readonly description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<ScheduledOperation>;
  /** Operation error message */
  readonly errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  readonly rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  readonly release?: Maybe<ScheduledRelease>;
  /** System stage field */
  readonly stage: Stage;
  /** operation Status */
  readonly status: ScheduledOperationStatus;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Category | Info | Piece;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  readonly connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  readonly rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  readonly release?: InputMaybe<ScheduledReleaseWhereInput>;
  readonly status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  readonly set?: InputMaybe<ReadonlyArray<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  readonly connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  readonly rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  readonly release?: InputMaybe<ScheduledReleaseWhereInput>;
  readonly status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledOperationStatus>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Release description */
  readonly description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<ScheduledRelease>;
  /** Release error message */
  readonly errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** Whether scheduled release should be run */
  readonly isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  readonly isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  readonly operations: ReadonlyArray<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  /** Release date and time */
  readonly releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  readonly stage: Stage;
  /** Release Status */
  readonly status: ScheduledReleaseStatus;
  /** Release Title */
  readonly title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<ReadonlyArray<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  readonly create?: InputMaybe<ReadonlyArray<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  readonly connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  readonly create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']>;
  readonly isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  readonly operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly releaseAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly releaseAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  readonly title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  readonly description?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  readonly connect?: InputMaybe<ReadonlyArray<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  readonly create?: InputMaybe<ReadonlyArray<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  readonly delete?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  readonly set?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  readonly update?: InputMaybe<ReadonlyArray<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  readonly upsert?: InputMaybe<ReadonlyArray<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  readonly description?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  readonly where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  readonly connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  readonly create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  readonly delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  readonly update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  readonly upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  readonly update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  readonly where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly createdBy?: InputMaybe<UserWhereInput>;
  readonly description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: InputMaybe<Scalars['String']>;
  readonly errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly errorMessage_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly errorMessage_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']>;
  readonly isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  readonly operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  readonly operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly publishedBy?: InputMaybe<UserWhereInput>;
  readonly releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly releaseAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly releaseAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  readonly status_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  readonly status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: InputMaybe<ReadonlyArray<InputMaybe<ScheduledReleaseStatus>>>;
  readonly title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: InputMaybe<Scalars['String']>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  readonly locale: Locale;
  /** Stages to unpublish selected locales from */
  readonly stages: ReadonlyArray<Stage>;
};

/** User system model */
export type User = Node & {
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<User>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  readonly isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  readonly kind: UserKind;
  /** The username */
  readonly name: Scalars['String'];
  /** Profile Picture url */
  readonly picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<UserEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  readonly connect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly documentInStages_every?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<UserWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']>;
  readonly kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  readonly kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  readonly name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars['String']>;
  readonly picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly picture_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  readonly connect?: InputMaybe<ReadonlyArray<UserConnectInput>>;
  /** Disconnect multiple User documents */
  readonly disconnect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  readonly set?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  readonly disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  readonly outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: InputMaybe<Scalars['String']>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly documentInStages_every?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_none?: InputMaybe<UserWhereStageInput>;
  readonly documentInStages_some?: InputMaybe<UserWhereStageInput>;
  readonly id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  readonly id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: InputMaybe<Scalars['ID']>;
  readonly isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: InputMaybe<Scalars['Boolean']>;
  readonly kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  readonly kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: InputMaybe<ReadonlyArray<InputMaybe<UserKind>>>;
  readonly name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: InputMaybe<Scalars['String']>;
  readonly picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly picture_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  readonly picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: InputMaybe<Scalars['String']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  readonly compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  readonly stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  readonly createdAt: Scalars['DateTime'];
  readonly id: Scalars['ID'];
  readonly revision: Scalars['Int'];
  readonly stage: Stage;
};

export type VersionWhereInput = {
  readonly id: Scalars['ID'];
  readonly revision: Scalars['Int'];
  readonly stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetCategoriesQueryVariables = Exact<{
  stage: Stage;
}>;


export type GetCategoriesQuery = { readonly categories: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor, readonly backgroundVideo?: { readonly mimeType?: string | null, readonly url: string } | null, readonly backgroundVideoShort?: { readonly mimeType?: string | null, readonly url: string } | null }> };

export type GetHeaderQueryVariables = Exact<{
  stage: Stage;
}>;


export type GetHeaderQuery = { readonly categories: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor }> };

export type GetInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetInfoQuery = { readonly info?: { readonly presentation?: { readonly markdown: string, readonly text: string } | null } | null };

export type GetCategoryQueryVariables = Exact<{
  slug: Scalars['String'];
  stage: Stage;
}>;


export type GetCategoryQuery = { readonly categories: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor, readonly pieces: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly type: PieceType, readonly images: ReadonlyArray<{ readonly id: string, readonly mimeType?: string | null, readonly jpg: string, readonly webp: string }> }> }>, readonly category?: { readonly description?: string | null, readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor, readonly content?: { readonly markdown: string } | null, readonly pieces: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly type: PieceType, readonly images: ReadonlyArray<{ readonly id: string, readonly mimeType?: string | null, readonly jpg: string, readonly webp: string }> }> } | null };

export type GetPieceQueryVariables = Exact<{
  slug: Scalars['String'];
  stage: Stage;
}>;


export type GetPieceQuery = { readonly categories: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor, readonly pieces: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly type: PieceType, readonly images: ReadonlyArray<{ readonly id: string, readonly mimeType?: string | null, readonly jpg: string, readonly webp: string }> }> }>, readonly piece?: { readonly id: string, readonly title: string, readonly slug: string, readonly description?: string | null, readonly type: PieceType, readonly tags: ReadonlyArray<string>, readonly technique?: string | null, readonly location?: string | null, readonly dimensions?: string | null, readonly duration?: string | null, readonly participants: ReadonlyArray<string>, readonly category?: { readonly title: string, readonly color: PageColor } | null, readonly content?: { readonly markdown: string } | null, readonly images: ReadonlyArray<{ readonly id: string, readonly mimeType?: string | null, readonly jpg: string, readonly webp: string }>, readonly related: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly category?: { readonly title: string, readonly color: PageColor } | null }> } | null };

export type PiecesFragmentFragment = { readonly pieces: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly type: PieceType, readonly images: ReadonlyArray<{ readonly id: string, readonly mimeType?: string | null, readonly jpg: string, readonly webp: string }> }> };

export type CategoryFragmentFragment = { readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor };

export const PiecesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PiecesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pieces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mimeType_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"image/jpeg","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","alias":{"kind":"Name","value":"jpg"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"500"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"500"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"jpg"}}]}}]}}]}}]},{"kind":"Field","alias":{"kind":"Name","value":"webp"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"500"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"500"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"webp"}}]}}]}}]}}]}]}}]}}]}}]} as unknown as DocumentNode<PiecesFragmentFragment, unknown>;
export const CategoryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<CategoryFragmentFragment, unknown>;
export const GetCategoriesDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundVideoShort"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},...CategoryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetHeaderDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHeader"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}}]}}]}},...CategoryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetHeaderQuery, GetHeaderQueryVariables>;
export const GetInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"info"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"presentation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<GetInfoQuery, GetInfoQueryVariables>;
export const GetCategoryDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PiecesFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PiecesFragment"}}]}}]}},...CategoryFragmentFragmentDoc.definitions,...PiecesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetPieceDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPiece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PiecesFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"technique"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"participants"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mimeType_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"image/jpeg","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","alias":{"kind":"Name","value":"jpg"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"jpg"}}]}}]}}]}}]},{"kind":"Field","alias":{"kind":"Name","value":"webp"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"webp"}}]}}]}}]}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"related"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}},...CategoryFragmentFragmentDoc.definitions,...PiecesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPieceQuery, GetPieceQueryVariables>;