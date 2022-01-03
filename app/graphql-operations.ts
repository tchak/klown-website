import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
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
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


/** Asset system model */
export type AssetBackgroundVideoShortCategoryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
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
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: ReadonlyArray<Locale>;
};


/** Asset system model */
export type AssetPhotosPieceArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PieceWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: Maybe<ConnectPositionInput>;
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
  readonly backgroundVideoCategory?: Maybe<CategoryCreateManyInlineInput>;
  readonly backgroundVideoShortCategory?: Maybe<CategoryCreateManyInlineInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly fileName: Scalars['String'];
  readonly handle: Scalars['String'];
  readonly height?: Maybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations?: Maybe<AssetCreateLocalizationsInput>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly photosPiece?: Maybe<PieceCreateManyInlineInput>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly fileName: Scalars['String'];
  readonly handle: Scalars['String'];
  readonly height?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly width?: Maybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  readonly data: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  readonly create?: Maybe<ReadonlyArray<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  readonly connect?: Maybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  readonly create?: Maybe<ReadonlyArray<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  readonly connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  readonly create?: Maybe<AssetCreateInput>;
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
  readonly AND?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  readonly backgroundVideoCategory_every?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_none?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_some?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_every?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_none?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_some?: Maybe<CategoryWhereInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly photosPiece_every?: Maybe<PieceWhereInput>;
  readonly photosPiece_none?: Maybe<PieceWhereInput>;
  readonly photosPiece_some?: Maybe<PieceWhereInput>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedBy?: Maybe<UserWhereInput>;
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
  readonly document?: Maybe<DocumentTransformationInput>;
  readonly image?: Maybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  readonly validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  readonly backgroundVideoCategory?: Maybe<CategoryUpdateManyInlineInput>;
  readonly backgroundVideoShortCategory?: Maybe<CategoryUpdateManyInlineInput>;
  readonly fileName?: Maybe<Scalars['String']>;
  readonly handle?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  /** Manage document localizations */
  readonly localizations?: Maybe<AssetUpdateLocalizationsInput>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly photosPiece?: Maybe<PieceUpdateManyInlineInput>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  readonly fileName?: Maybe<Scalars['String']>;
  readonly handle?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  readonly data: AssetUpdateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create?: Maybe<ReadonlyArray<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  readonly delete?: Maybe<ReadonlyArray<Locale>>;
  /** Localizations to update */
  readonly update?: Maybe<ReadonlyArray<AssetUpdateLocalizationInput>>;
  readonly upsert?: Maybe<ReadonlyArray<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  readonly connect?: Maybe<ReadonlyArray<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  readonly create?: Maybe<ReadonlyArray<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  readonly delete?: Maybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  readonly disconnect?: Maybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  readonly set?: Maybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  readonly update?: Maybe<ReadonlyArray<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  readonly upsert?: Maybe<ReadonlyArray<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  readonly fileName?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  /** Optional updates to localizations */
  readonly localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  readonly fileName?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  readonly data: AssetUpdateManyLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  readonly update?: Maybe<ReadonlyArray<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: AssetUpdateManyInput;
  /** Document search */
  readonly where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  readonly connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  readonly create?: Maybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  readonly delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  readonly disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Asset document */
  readonly update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  readonly upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
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

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  readonly backgroundVideoCategory_every?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_none?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_some?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_every?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_none?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoShortCategory_some?: Maybe<CategoryWhereInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly fileName?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly fileName_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly fileName_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly fileName_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly fileName_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly fileName_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly fileName_starts_with?: Maybe<Scalars['String']>;
  readonly handle?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly handle_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly handle_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly handle_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly handle_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly handle_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly handle_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly handle_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly handle_starts_with?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly height_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly height_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly height_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly height_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  readonly height_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly mimeType_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly mimeType_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly mimeType_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly mimeType_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly mimeType_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly mimeType_starts_with?: Maybe<Scalars['String']>;
  readonly photosPiece_every?: Maybe<PieceWhereInput>;
  readonly photosPiece_none?: Maybe<PieceWhereInput>;
  readonly photosPiece_some?: Maybe<PieceWhereInput>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly size?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly size_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly size_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly size_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly size_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  readonly size_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedBy?: Maybe<UserWhereInput>;
  readonly width?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly width_gte?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly width_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly width_lte?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly width_not?: Maybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  readonly width_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
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
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type CategoryBackgroundVideoShortArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type CategoryCreatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};


export type CategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type CategoryPiecesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PieceWhereInput>;
};


export type CategoryPublishedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type CategoryUpdatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: Maybe<ConnectPositionInput>;
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
  readonly backgroundVideo?: Maybe<AssetCreateOneInlineInput>;
  readonly backgroundVideoShort?: Maybe<AssetCreateOneInlineInput>;
  readonly color: PageColor;
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly pieces?: Maybe<PieceCreateManyInlineInput>;
  readonly slug: Scalars['String'];
  readonly title: Scalars['String'];
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  readonly connect?: Maybe<ReadonlyArray<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  readonly create?: Maybe<ReadonlyArray<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  readonly connect?: Maybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  readonly create?: Maybe<CategoryCreateInput>;
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
  readonly AND?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  readonly backgroundVideo?: Maybe<AssetWhereInput>;
  readonly backgroundVideoShort?: Maybe<AssetWhereInput>;
  readonly color?: Maybe<PageColor>;
  /** All values that are contained in given list. */
  readonly color_in?: Maybe<ReadonlyArray<PageColor>>;
  /** All values that are not equal to given value. */
  readonly color_not?: Maybe<PageColor>;
  /** All values that are not contained in given list. */
  readonly color_not_in?: Maybe<ReadonlyArray<PageColor>>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly pieces_every?: Maybe<PieceWhereInput>;
  readonly pieces_none?: Maybe<PieceWhereInput>;
  readonly pieces_some?: Maybe<PieceWhereInput>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedBy?: Maybe<UserWhereInput>;
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
  readonly backgroundVideo?: Maybe<AssetUpdateOneInlineInput>;
  readonly backgroundVideoShort?: Maybe<AssetUpdateOneInlineInput>;
  readonly color?: Maybe<PageColor>;
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly pieces?: Maybe<PieceUpdateManyInlineInput>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  readonly connect?: Maybe<ReadonlyArray<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  readonly create?: Maybe<ReadonlyArray<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  readonly delete?: Maybe<ReadonlyArray<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  readonly disconnect?: Maybe<ReadonlyArray<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  readonly set?: Maybe<ReadonlyArray<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  readonly update?: Maybe<ReadonlyArray<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  readonly upsert?: Maybe<ReadonlyArray<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  readonly color?: Maybe<PageColor>;
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly description?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: CategoryUpdateManyInput;
  /** Document search */
  readonly where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  readonly connect?: Maybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  readonly create?: Maybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  readonly delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Category document */
  readonly disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Category document */
  readonly update?: Maybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  readonly upsert?: Maybe<CategoryUpsertWithNestedWhereUniqueInput>;
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

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  readonly backgroundVideo?: Maybe<AssetWhereInput>;
  readonly backgroundVideoShort?: Maybe<AssetWhereInput>;
  readonly color?: Maybe<PageColor>;
  /** All values that are contained in given list. */
  readonly color_in?: Maybe<ReadonlyArray<PageColor>>;
  /** All values that are not equal to given value. */
  readonly color_not?: Maybe<PageColor>;
  /** All values that are not contained in given list. */
  readonly color_not_in?: Maybe<ReadonlyArray<PageColor>>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly pieces_every?: Maybe<PieceWhereInput>;
  readonly pieces_none?: Maybe<PieceWhereInput>;
  readonly pieces_some?: Maybe<PieceWhereInput>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedBy?: Maybe<UserWhereInput>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  readonly css: Scalars['String'];
  readonly hex: Scalars['Hex'];
  readonly rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  readonly hex?: Maybe<Scalars['Hex']>;
  readonly rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  readonly after?: Maybe<Scalars['ID']>;
  /** Connect document before specified document */
  readonly before?: Maybe<Scalars['ID']>;
  /** Connect document at last position */
  readonly end?: Maybe<Scalars['Boolean']>;
  /** Connect document at first position */
  readonly start?: Maybe<Scalars['Boolean']>;
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
  readonly format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  readonly output?: Maybe<DocumentOutputInput>;
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
  readonly fit?: Maybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly height?: Maybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly width?: Maybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  readonly resize?: Maybe<ImageResizeInput>;
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
  /** Create one piece */
  readonly createPiece?: Maybe<Piece>;
  /** Create one pieceType_v2 */
  readonly createPieceType_v2?: Maybe<PieceType_V2>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  readonly deleteAsset?: Maybe<Asset>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  readonly deleteCategory?: Maybe<Category>;
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
   * Delete many PieceType_v2 documents
   * @deprecated Please use the new paginated many mutation (deleteManyPieceTypesConnection)
   */
  readonly deleteManyPieceTypes: BatchPayload;
  /** Delete many PieceType_v2 documents, return deleted documents */
  readonly deleteManyPieceTypesConnection: PieceType_V2Connection;
  /**
   * Delete many Piece documents
   * @deprecated Please use the new paginated many mutation (deleteManyPiecesConnection)
   */
  readonly deleteManyPieces: BatchPayload;
  /** Delete many Piece documents, return deleted documents */
  readonly deleteManyPiecesConnection: PieceConnection;
  /** Delete one piece from _all_ existing stages. Returns deleted document. */
  readonly deletePiece?: Maybe<Piece>;
  /** Delete one pieceType_v2 from _all_ existing stages. Returns deleted document. */
  readonly deletePieceType_v2?: Maybe<PieceType_V2>;
  /** Publish one asset */
  readonly publishAsset?: Maybe<Asset>;
  /** Publish one category */
  readonly publishCategory?: Maybe<Category>;
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
   * Publish many PieceType_v2 documents
   * @deprecated Please use the new paginated many mutation (publishManyPieceTypesConnection)
   */
  readonly publishManyPieceTypes: BatchPayload;
  /** Publish many PieceType_v2 documents */
  readonly publishManyPieceTypesConnection: PieceType_V2Connection;
  /**
   * Publish many Piece documents
   * @deprecated Please use the new paginated many mutation (publishManyPiecesConnection)
   */
  readonly publishManyPieces: BatchPayload;
  /** Publish many Piece documents */
  readonly publishManyPiecesConnection: PieceConnection;
  /** Publish one piece */
  readonly publishPiece?: Maybe<Piece>;
  /** Publish one pieceType_v2 */
  readonly publishPieceType_v2?: Maybe<PieceType_V2>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishAsset?: Maybe<Asset>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishCategory?: Maybe<Category>;
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
   * Unpublish many PieceType_v2 documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPieceTypesConnection)
   */
  readonly unpublishManyPieceTypes: BatchPayload;
  /** Find many PieceType_v2 documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyPieceTypesConnection: PieceType_V2Connection;
  /**
   * Unpublish many Piece documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPiecesConnection)
   */
  readonly unpublishManyPieces: BatchPayload;
  /** Find many Piece documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyPiecesConnection: PieceConnection;
  /** Unpublish one piece from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishPiece?: Maybe<Piece>;
  /** Unpublish one pieceType_v2 from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishPieceType_v2?: Maybe<PieceType_V2>;
  /** Update one asset */
  readonly updateAsset?: Maybe<Asset>;
  /** Update one category */
  readonly updateCategory?: Maybe<Category>;
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
   * Update many pieceTypes
   * @deprecated Please use the new paginated many mutation (updateManyPieceTypesConnection)
   */
  readonly updateManyPieceTypes: BatchPayload;
  /** Update many PieceType_v2 documents */
  readonly updateManyPieceTypesConnection: PieceType_V2Connection;
  /**
   * Update many pieces
   * @deprecated Please use the new paginated many mutation (updateManyPiecesConnection)
   */
  readonly updateManyPieces: BatchPayload;
  /** Update many Piece documents */
  readonly updateManyPiecesConnection: PieceConnection;
  /** Update one piece */
  readonly updatePiece?: Maybe<Piece>;
  /** Update one pieceType_v2 */
  readonly updatePieceType_v2?: Maybe<PieceType_V2>;
  /** Upsert one asset */
  readonly upsertAsset?: Maybe<Asset>;
  /** Upsert one category */
  readonly upsertCategory?: Maybe<Category>;
  /** Upsert one piece */
  readonly upsertPiece?: Maybe<Piece>;
  /** Upsert one pieceType_v2 */
  readonly upsertPieceType_v2?: Maybe<PieceType_V2>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreatePieceArgs = {
  data: PieceCreateInput;
};


export type MutationCreatePieceType_V2Args = {
  data: PieceType_V2CreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyPieceTypesArgs = {
  where?: Maybe<PieceType_V2ManyWhereInput>;
};


export type MutationDeleteManyPieceTypesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PieceType_V2ManyWhereInput>;
};


export type MutationDeleteManyPiecesArgs = {
  where?: Maybe<PieceManyWhereInput>;
};


export type MutationDeleteManyPiecesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PieceManyWhereInput>;
};


export type MutationDeletePieceArgs = {
  where: PieceWhereUniqueInput;
};


export type MutationDeletePieceType_V2Args = {
  where: PieceType_V2WhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishCategoryArgs = {
  to?: ReadonlyArray<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationPublishManyCategoriesArgs = {
  to?: ReadonlyArray<Stage>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationPublishManyPieceTypesArgs = {
  to?: ReadonlyArray<Stage>;
  where?: Maybe<PieceType_V2ManyWhereInput>;
};


export type MutationPublishManyPieceTypesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: Maybe<PieceType_V2ManyWhereInput>;
};


export type MutationPublishManyPiecesArgs = {
  to?: ReadonlyArray<Stage>;
  where?: Maybe<PieceManyWhereInput>;
};


export type MutationPublishManyPiecesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  to?: ReadonlyArray<Stage>;
  where?: Maybe<PieceManyWhereInput>;
};


export type MutationPublishPieceArgs = {
  to?: ReadonlyArray<Stage>;
  where: PieceWhereUniqueInput;
};


export type MutationPublishPieceType_V2Args = {
  to?: ReadonlyArray<Stage>;
  where: PieceType_V2WhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCategoryArgs = {
  from?: ReadonlyArray<Stage>;
  where: CategoryWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: ReadonlyArray<Stage>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCategoriesArgs = {
  from?: ReadonlyArray<Stage>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyPieceTypesArgs = {
  from?: ReadonlyArray<Stage>;
  where?: Maybe<PieceType_V2ManyWhereInput>;
};


export type MutationUnpublishManyPieceTypesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<PieceType_V2ManyWhereInput>;
};


export type MutationUnpublishManyPiecesArgs = {
  from?: ReadonlyArray<Stage>;
  where?: Maybe<PieceManyWhereInput>;
};


export type MutationUnpublishManyPiecesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  from?: ReadonlyArray<Stage>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Maybe<Stage>;
  where?: Maybe<PieceManyWhereInput>;
};


export type MutationUnpublishPieceArgs = {
  from?: ReadonlyArray<Stage>;
  where: PieceWhereUniqueInput;
};


export type MutationUnpublishPieceType_V2Args = {
  from?: ReadonlyArray<Stage>;
  where: PieceType_V2WhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: CategoryUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyPieceTypesArgs = {
  data: PieceType_V2UpdateManyInput;
  where?: Maybe<PieceType_V2ManyWhereInput>;
};


export type MutationUpdateManyPieceTypesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PieceType_V2UpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PieceType_V2ManyWhereInput>;
};


export type MutationUpdateManyPiecesArgs = {
  data: PieceUpdateManyInput;
  where?: Maybe<PieceManyWhereInput>;
};


export type MutationUpdateManyPiecesConnectionArgs = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  data: PieceUpdateManyInput;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PieceManyWhereInput>;
};


export type MutationUpdatePieceArgs = {
  data: PieceUpdateInput;
  where: PieceWhereUniqueInput;
};


export type MutationUpdatePieceType_V2Args = {
  data: PieceType_V2UpdateInput;
  where: PieceType_V2WhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertPieceArgs = {
  upsert: PieceUpsertInput;
  where: PieceWhereUniqueInput;
};


export type MutationUpsertPieceType_V2Args = {
  upsert: PieceType_V2UpsertInput;
  where: PieceType_V2WhereUniqueInput;
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
  readonly slug: Scalars['String'];
  /** System stage field */
  readonly stage: Stage;
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly technique?: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly type: PieceType;
  readonly type_v2?: Maybe<PieceType_V2>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};


export type PieceCategoryArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceCreatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};


export type PieceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PieceImagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetWhereInput>;
};


export type PiecePublishedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceRelatedArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PieceWhereInput>;
};


export type PieceRelatedFromArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<PieceWhereInput>;
};


export type PieceType_V2Args = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceUpdatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};

export type PieceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: Maybe<ConnectPositionInput>;
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
  readonly category?: Maybe<CategoryCreateOneInlineInput>;
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  readonly images?: Maybe<AssetCreateManyInlineInput>;
  readonly location?: Maybe<Scalars['String']>;
  readonly participants?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly related?: Maybe<PieceCreateManyInlineInput>;
  readonly relatedFrom?: Maybe<PieceCreateManyInlineInput>;
  readonly slug: Scalars['String'];
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly technique?: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly type: PieceType;
  readonly type_v2?: Maybe<PieceType_V2CreateOneInlineInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PieceCreateManyInlineInput = {
  /** Connect multiple existing Piece documents */
  readonly connect?: Maybe<ReadonlyArray<PieceWhereUniqueInput>>;
  /** Create and connect multiple existing Piece documents */
  readonly create?: Maybe<ReadonlyArray<PieceCreateInput>>;
};

export type PieceCreateOneInlineInput = {
  /** Connect one existing Piece document */
  readonly connect?: Maybe<PieceWhereUniqueInput>;
  /** Create and connect one Piece document */
  readonly create?: Maybe<PieceCreateInput>;
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
  readonly AND?: Maybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<PieceWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  readonly category?: Maybe<CategoryWhereInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly dimensions_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly dimensions_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly dimensions_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly dimensions_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly dimensions_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly dimensions_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly dimensions_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly dimensions_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly dimensions_starts_with?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly duration_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly duration_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly duration_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly duration_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly duration_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly duration_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly duration_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly duration_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly duration_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly images_every?: Maybe<AssetWhereInput>;
  readonly images_none?: Maybe<AssetWhereInput>;
  readonly images_some?: Maybe<AssetWhereInput>;
  readonly location?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly location_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly location_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly location_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly location_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly location_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly location_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly location_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly location_starts_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly participants?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly participants_contains_all?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly participants_contains_none?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly participants_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly participants_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly relatedFrom_every?: Maybe<PieceWhereInput>;
  readonly relatedFrom_none?: Maybe<PieceWhereInput>;
  readonly relatedFrom_some?: Maybe<PieceWhereInput>;
  readonly related_every?: Maybe<PieceWhereInput>;
  readonly related_none?: Maybe<PieceWhereInput>;
  readonly related_some?: Maybe<PieceWhereInput>;
  readonly slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly tags_contains_all?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly tags_contains_none?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly tags_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly tags_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly technique?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly technique_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly technique_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly technique_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly technique_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly technique_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly technique_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly technique_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly technique_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly technique_starts_with?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  readonly type?: Maybe<PieceType>;
  /** All values that are contained in given list. */
  readonly type_in?: Maybe<ReadonlyArray<PieceType>>;
  /** All values that are not equal to given value. */
  readonly type_not?: Maybe<PieceType>;
  /** All values that are not contained in given list. */
  readonly type_not_in?: Maybe<ReadonlyArray<PieceType>>;
  readonly type_v2?: Maybe<PieceType_V2WhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedBy?: Maybe<UserWhereInput>;
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

export type PieceType_V2 = Node & {
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<PieceType_V2>;
  /** List of PieceType_v2 versions */
  readonly history: ReadonlyArray<Version>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  /** System stage field */
  readonly stage: Stage;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
};


export type PieceType_V2CreatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceType_V2DocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: ReadonlyArray<Stage>;
};


export type PieceType_V2HistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


export type PieceType_V2PublishedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceType_V2UpdatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};

export type PieceType_V2ConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  readonly where: PieceType_V2WhereUniqueInput;
};

/** A connection to a list of items. */
export type PieceType_V2Connection = {
  readonly aggregate: Aggregate;
  /** A list of edges. */
  readonly edges: ReadonlyArray<PieceType_V2Edge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
};

export type PieceType_V2CreateInput = {
  readonly ckufm7jkc8qw001xngik6g22f?: Maybe<PieceCreateManyInlineInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly name: Scalars['String'];
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PieceType_V2CreateManyInlineInput = {
  /** Connect multiple existing PieceType_v2 documents */
  readonly connect?: Maybe<ReadonlyArray<PieceType_V2WhereUniqueInput>>;
  /** Create and connect multiple existing PieceType_v2 documents */
  readonly create?: Maybe<ReadonlyArray<PieceType_V2CreateInput>>;
};

export type PieceType_V2CreateOneInlineInput = {
  /** Connect one existing PieceType_v2 document */
  readonly connect?: Maybe<PieceType_V2WhereUniqueInput>;
  /** Create and connect one PieceType_v2 document */
  readonly create?: Maybe<PieceType_V2CreateInput>;
};

/** An edge in a connection. */
export type PieceType_V2Edge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: PieceType_V2;
};

/** Identifies documents */
export type PieceType_V2ManyWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<PieceType_V2WhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<PieceType_V2WhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<PieceType_V2WhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedBy?: Maybe<UserWhereInput>;
};

export enum PieceType_V2OrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PieceType_V2UpdateInput = {
  readonly ckufm7jkc8qw001xngik6g22f?: Maybe<PieceUpdateManyInlineInput>;
  readonly name?: Maybe<Scalars['String']>;
};

export type PieceType_V2UpdateManyInlineInput = {
  /** Connect multiple existing PieceType_v2 documents */
  readonly connect?: Maybe<ReadonlyArray<PieceType_V2ConnectInput>>;
  /** Create and connect multiple PieceType_v2 documents */
  readonly create?: Maybe<ReadonlyArray<PieceType_V2CreateInput>>;
  /** Delete multiple PieceType_v2 documents */
  readonly delete?: Maybe<ReadonlyArray<PieceType_V2WhereUniqueInput>>;
  /** Disconnect multiple PieceType_v2 documents */
  readonly disconnect?: Maybe<ReadonlyArray<PieceType_V2WhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PieceType_v2 documents */
  readonly set?: Maybe<ReadonlyArray<PieceType_V2WhereUniqueInput>>;
  /** Update multiple PieceType_v2 documents */
  readonly update?: Maybe<ReadonlyArray<PieceType_V2UpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PieceType_v2 documents */
  readonly upsert?: Maybe<ReadonlyArray<PieceType_V2UpsertWithNestedWhereUniqueInput>>;
};

export type PieceType_V2UpdateManyInput = {
  /** No fields in updateMany data input */
  readonly _?: Maybe<Scalars['String']>;
};

export type PieceType_V2UpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: PieceType_V2UpdateManyInput;
  /** Document search */
  readonly where: PieceType_V2WhereInput;
};

export type PieceType_V2UpdateOneInlineInput = {
  /** Connect existing PieceType_v2 document */
  readonly connect?: Maybe<PieceType_V2WhereUniqueInput>;
  /** Create and connect one PieceType_v2 document */
  readonly create?: Maybe<PieceType_V2CreateInput>;
  /** Delete currently connected PieceType_v2 document */
  readonly delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected PieceType_v2 document */
  readonly disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single PieceType_v2 document */
  readonly update?: Maybe<PieceType_V2UpdateWithNestedWhereUniqueInput>;
  /** Upsert single PieceType_v2 document */
  readonly upsert?: Maybe<PieceType_V2UpsertWithNestedWhereUniqueInput>;
};

export type PieceType_V2UpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  readonly data: PieceType_V2UpdateInput;
  /** Unique document search */
  readonly where: PieceType_V2WhereUniqueInput;
};

export type PieceType_V2UpsertInput = {
  /** Create document if it didn't exist */
  readonly create: PieceType_V2CreateInput;
  /** Update document if it exists */
  readonly update: PieceType_V2UpdateInput;
};

export type PieceType_V2UpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  readonly data: PieceType_V2UpsertInput;
  /** Unique document search */
  readonly where: PieceType_V2WhereUniqueInput;
};

/** Identifies documents */
export type PieceType_V2WhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<PieceType_V2WhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<PieceType_V2WhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<PieceType_V2WhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedBy?: Maybe<UserWhereInput>;
};

/** References PieceType_v2 record uniquely */
export type PieceType_V2WhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
};

export type PieceUpdateInput = {
  readonly category?: Maybe<CategoryUpdateOneInlineInput>;
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  readonly images?: Maybe<AssetUpdateManyInlineInput>;
  readonly location?: Maybe<Scalars['String']>;
  readonly participants?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly related?: Maybe<PieceUpdateManyInlineInput>;
  readonly relatedFrom?: Maybe<PieceUpdateManyInlineInput>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly technique?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly type?: Maybe<PieceType>;
  readonly type_v2?: Maybe<PieceType_V2UpdateOneInlineInput>;
};

export type PieceUpdateManyInlineInput = {
  /** Connect multiple existing Piece documents */
  readonly connect?: Maybe<ReadonlyArray<PieceConnectInput>>;
  /** Create and connect multiple Piece documents */
  readonly create?: Maybe<ReadonlyArray<PieceCreateInput>>;
  /** Delete multiple Piece documents */
  readonly delete?: Maybe<ReadonlyArray<PieceWhereUniqueInput>>;
  /** Disconnect multiple Piece documents */
  readonly disconnect?: Maybe<ReadonlyArray<PieceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Piece documents */
  readonly set?: Maybe<ReadonlyArray<PieceWhereUniqueInput>>;
  /** Update multiple Piece documents */
  readonly update?: Maybe<ReadonlyArray<PieceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Piece documents */
  readonly upsert?: Maybe<ReadonlyArray<PieceUpsertWithNestedWhereUniqueInput>>;
};

export type PieceUpdateManyInput = {
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly participants?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly technique?: Maybe<Scalars['String']>;
  readonly type?: Maybe<PieceType>;
};

export type PieceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  readonly data: PieceUpdateManyInput;
  /** Document search */
  readonly where: PieceWhereInput;
};

export type PieceUpdateOneInlineInput = {
  /** Connect existing Piece document */
  readonly connect?: Maybe<PieceWhereUniqueInput>;
  /** Create and connect one Piece document */
  readonly create?: Maybe<PieceCreateInput>;
  /** Delete currently connected Piece document */
  readonly delete?: Maybe<Scalars['Boolean']>;
  /** Disconnect currently connected Piece document */
  readonly disconnect?: Maybe<Scalars['Boolean']>;
  /** Update single Piece document */
  readonly update?: Maybe<PieceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Piece document */
  readonly upsert?: Maybe<PieceUpsertWithNestedWhereUniqueInput>;
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

/** Identifies documents */
export type PieceWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<PieceWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  readonly category?: Maybe<CategoryWhereInput>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly description?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly description_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly dimensions_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly dimensions_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly dimensions_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly dimensions_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly dimensions_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly dimensions_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly dimensions_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly dimensions_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly dimensions_starts_with?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly duration_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly duration_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly duration_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly duration_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly duration_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly duration_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly duration_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly duration_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly duration_starts_with?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly images_every?: Maybe<AssetWhereInput>;
  readonly images_none?: Maybe<AssetWhereInput>;
  readonly images_some?: Maybe<AssetWhereInput>;
  readonly location?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly location_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly location_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly location_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly location_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly location_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly location_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly location_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly location_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly location_starts_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly participants?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly participants_contains_all?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly participants_contains_none?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly participants_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly participants_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly relatedFrom_every?: Maybe<PieceWhereInput>;
  readonly relatedFrom_none?: Maybe<PieceWhereInput>;
  readonly relatedFrom_some?: Maybe<PieceWhereInput>;
  readonly related_every?: Maybe<PieceWhereInput>;
  readonly related_none?: Maybe<PieceWhereInput>;
  readonly related_some?: Maybe<PieceWhereInput>;
  readonly slug?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly slug_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly tags_contains_all?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly tags_contains_none?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly tags_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly tags_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly technique?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly technique_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly technique_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly technique_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly technique_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly technique_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly technique_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly technique_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly technique_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly technique_starts_with?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  readonly type?: Maybe<PieceType>;
  /** All values that are contained in given list. */
  readonly type_in?: Maybe<ReadonlyArray<PieceType>>;
  /** All values that are not equal to given value. */
  readonly type_not?: Maybe<PieceType>;
  /** All values that are not contained in given list. */
  readonly type_not_in?: Maybe<ReadonlyArray<PieceType>>;
  readonly type_v2?: Maybe<PieceType_V2WhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedBy?: Maybe<UserWhereInput>;
};

/** References Piece record uniquely */
export type PieceWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
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
  /** Fetches an object given its ID */
  readonly node?: Maybe<Node>;
  /** Retrieve a single piece */
  readonly piece?: Maybe<Piece>;
  /** Retrieve a single pieceType_v2 */
  readonly pieceType_v2?: Maybe<PieceType_V2>;
  /** Retrieve document version */
  readonly pieceType_v2Version?: Maybe<DocumentVersion>;
  /** Retrieve multiple pieceTypes */
  readonly pieceTypes: ReadonlyArray<PieceType_V2>;
  /** Retrieve multiple pieceTypes using the Relay connection interface */
  readonly pieceTypesConnection: PieceType_V2Connection;
  /** Retrieve document version */
  readonly pieceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pieces */
  readonly pieces: ReadonlyArray<Piece>;
  /** Retrieve multiple pieces using the Relay connection interface */
  readonly piecesConnection: PieceConnection;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};


export type QueryCategoriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryCategoriesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
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


export type QueryPieceType_V2Args = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: PieceType_V2WhereUniqueInput;
};


export type QueryPieceType_V2VersionArgs = {
  where: VersionWhereInput;
};


export type QueryPieceTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: Maybe<PieceType_V2OrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PieceType_V2WhereInput>;
};


export type QueryPieceTypesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: Maybe<PieceType_V2OrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PieceType_V2WhereInput>;
};


export type QueryPieceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPiecesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PieceWhereInput>;
};


export type QueryPiecesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<PieceWhereInput>;
};


export type QueryUserArgs = {
  locales?: ReadonlyArray<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: ReadonlyArray<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
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
  readonly position?: Maybe<ConnectPositionInput>;
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
  readonly connect?: Maybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  readonly connect?: Maybe<UserWhereUniqueInput>;
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
  readonly AND?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: Maybe<Scalars['Boolean']>;
  readonly kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: Maybe<ReadonlyArray<UserKind>>;
  /** All values that are not equal to given value. */
  readonly kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: Maybe<ReadonlyArray<UserKind>>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly picture_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: Maybe<Scalars['String']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
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
  readonly connect?: Maybe<ReadonlyArray<UserConnectInput>>;
  /** Disconnect multiple User documents */
  readonly disconnect?: Maybe<ReadonlyArray<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  readonly set?: Maybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  readonly connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  readonly disconnect?: Maybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  readonly isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: Maybe<Scalars['Boolean']>;
  readonly kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: Maybe<ReadonlyArray<UserKind>>;
  /** All values that are not equal to given value. */
  readonly kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: Maybe<ReadonlyArray<UserKind>>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly picture?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly picture_contains?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly picture_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not equal to given value. */
  readonly picture_not?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: Maybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: Maybe<Scalars['String']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
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


export type GetCategoriesQuery = { readonly categories: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor, readonly backgroundVideo?: { readonly mimeType?: string | null | undefined, readonly url: string } | null | undefined, readonly backgroundVideoShort?: { readonly mimeType?: string | null | undefined, readonly url: string } | null | undefined }> };

export type GetHeaderQueryVariables = Exact<{
  stage: Stage;
}>;


export type GetHeaderQuery = { readonly categories: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor }> };

export type GetCategoryQueryVariables = Exact<{
  slug: Scalars['String'];
  stage: Stage;
}>;


export type GetCategoryQuery = { readonly categories: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor, readonly pieces: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly images: ReadonlyArray<{ readonly id: string, readonly mimeType?: string | null | undefined, readonly jpg: string, readonly webp: string }> }> }>, readonly category?: { readonly description?: string | null | undefined, readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor, readonly content?: { readonly markdown: string } | null | undefined, readonly pieces: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly images: ReadonlyArray<{ readonly id: string, readonly mimeType?: string | null | undefined, readonly jpg: string, readonly webp: string }> }> } | null | undefined };

export type GetPieceQueryVariables = Exact<{
  slug: Scalars['String'];
  stage: Stage;
}>;


export type GetPieceQuery = { readonly categories: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor, readonly pieces: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly images: ReadonlyArray<{ readonly id: string, readonly mimeType?: string | null | undefined, readonly jpg: string, readonly webp: string }> }> }>, readonly piece?: { readonly id: string, readonly title: string, readonly slug: string, readonly description?: string | null | undefined, readonly type: PieceType, readonly tags: ReadonlyArray<string>, readonly technique?: string | null | undefined, readonly location?: string | null | undefined, readonly dimensions?: string | null | undefined, readonly duration?: string | null | undefined, readonly participants: ReadonlyArray<string>, readonly category?: { readonly title: string, readonly color: PageColor } | null | undefined, readonly content?: { readonly markdown: string } | null | undefined, readonly images: ReadonlyArray<{ readonly id: string, readonly mimeType?: string | null | undefined, readonly jpg: string, readonly webp: string }>, readonly related: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly category?: { readonly title: string, readonly color: PageColor } | null | undefined }> } | null | undefined };

export type PiecesFragmentFragment = { readonly pieces: ReadonlyArray<{ readonly id: string, readonly title: string, readonly slug: string, readonly images: ReadonlyArray<{ readonly id: string, readonly mimeType?: string | null | undefined, readonly jpg: string, readonly webp: string }> }> };

export type CategoryFragmentFragment = { readonly id: string, readonly title: string, readonly slug: string, readonly color: PageColor };

export const PiecesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PiecesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pieces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mimeType_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"image/jpeg","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","alias":{"kind":"Name","value":"jpg"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"500"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"500"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"jpg"}}]}}]}}]}}]},{"kind":"Field","alias":{"kind":"Name","value":"webp"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"500"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"500"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"webp"}}]}}]}}]}}]}]}}]}}]}}]} as unknown as DocumentNode<PiecesFragmentFragment, unknown>;
export const CategoryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<CategoryFragmentFragment, unknown>;
export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"backgroundVideoShort"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},...CategoryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetHeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHeader"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}}]}}]}},...CategoryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetHeaderQuery, GetHeaderQueryVariables>;
export const GetCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PiecesFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PiecesFragment"}}]}}]}},...CategoryFragmentFragmentDoc.definitions,...PiecesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetPieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPiece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PiecesFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"technique"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"participants"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mimeType_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"image/jpeg","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","alias":{"kind":"Name","value":"jpg"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"jpg"}}]}}]}}]}}]},{"kind":"Field","alias":{"kind":"Name","value":"webp"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"webp"}}]}}]}}]}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"related"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}},...CategoryFragmentFragmentDoc.definitions,...PiecesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPieceQuery, GetPieceQueryVariables>;