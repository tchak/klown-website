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
  /** System stage field */
  readonly stage: Stage;
  /** System Locale field */
  readonly locale: Locale;
  /** Get the other localizations for this document */
  readonly localizations: ReadonlyArray<Asset>;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Asset>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  /** The file handle */
  readonly handle: Scalars['String'];
  /** The file name */
  readonly fileName: Scalars['String'];
  /** The height of the file */
  readonly height?: Maybe<Scalars['Float']>;
  /** The file width */
  readonly width?: Maybe<Scalars['Float']>;
  /** The file size */
  readonly size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly backgroundVideoCategory: ReadonlyArray<Category>;
  readonly photosPiece: ReadonlyArray<Piece>;
  /** List of Asset versions */
  readonly history: ReadonlyArray<Version>;
  /** Get the url for the asset with provided transformations applied. */
  readonly url: Scalars['String'];
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: ReadonlyArray<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: ReadonlyArray<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
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
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
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
export type AssetBackgroundVideoCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
};


/** Asset system model */
export type AssetPhotosPieceArgs = {
  where?: Maybe<PieceWhereInput>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Document to connect */
  readonly where: AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type AssetConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<AssetEdge>;
  readonly aggregate: Aggregate;
};

export type AssetCreateInput = {
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly handle: Scalars['String'];
  readonly fileName: Scalars['String'];
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly backgroundVideoCategory?: Maybe<CategoryCreateManyInlineInput>;
  readonly photosPiece?: Maybe<PieceCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  readonly localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type AssetCreateLocalizationDataInput = {
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly handle: Scalars['String'];
  readonly fileName: Scalars['String'];
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
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
  /** Create and connect multiple existing Asset documents */
  readonly create?: Maybe<ReadonlyArray<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  readonly connect?: Maybe<ReadonlyArray<AssetWhereUniqueInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  readonly create?: Maybe<AssetCreateInput>;
  /** Connect one existing Asset document */
  readonly connect?: Maybe<AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  /** The item at the end of the edge. */
  readonly node: Asset;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<AssetWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedBy?: Maybe<UserWhereInput>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly backgroundVideoCategory_every?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_some?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_none?: Maybe<CategoryWhereInput>;
  readonly photosPiece_every?: Maybe<PieceWhereInput>;
  readonly photosPiece_some?: Maybe<PieceWhereInput>;
  readonly photosPiece_none?: Maybe<PieceWhereInput>;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  readonly image?: Maybe<ImageTransformationInput>;
  readonly document?: Maybe<DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  readonly validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  readonly handle?: Maybe<Scalars['String']>;
  readonly fileName?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  readonly backgroundVideoCategory?: Maybe<CategoryUpdateManyInlineInput>;
  readonly photosPiece?: Maybe<PieceUpdateManyInlineInput>;
  /** Manage document localizations */
  readonly localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationDataInput = {
  readonly handle?: Maybe<Scalars['String']>;
  readonly fileName?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
};

export type AssetUpdateLocalizationInput = {
  readonly data: AssetUpdateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  readonly create?: Maybe<ReadonlyArray<AssetCreateLocalizationInput>>;
  /** Localizations to update */
  readonly update?: Maybe<ReadonlyArray<AssetUpdateLocalizationInput>>;
  readonly upsert?: Maybe<ReadonlyArray<AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  readonly delete?: Maybe<ReadonlyArray<Locale>>;
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  readonly create?: Maybe<ReadonlyArray<AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  readonly connect?: Maybe<ReadonlyArray<AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  readonly set?: Maybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  readonly update?: Maybe<ReadonlyArray<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  readonly upsert?: Maybe<ReadonlyArray<AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  readonly disconnect?: Maybe<ReadonlyArray<AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  readonly delete?: Maybe<ReadonlyArray<AssetWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  readonly fileName?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  /** Optional updates to localizations */
  readonly localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
};

export type AssetUpdateManyLocalizationDataInput = {
  readonly fileName?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
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
  /** Document search */
  readonly where: AssetWhereInput;
  /** Update many input */
  readonly data: AssetUpdateManyInput;
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  readonly create?: Maybe<AssetCreateInput>;
  /** Update single Asset document */
  readonly update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  readonly upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  readonly connect?: Maybe<AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  readonly disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  readonly delete?: Maybe<Scalars['Boolean']>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
  /** Document to update */
  readonly data: AssetUpdateInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: AssetCreateInput;
  /** Update document if it exists */
  readonly update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  readonly update: AssetUpdateLocalizationDataInput;
  readonly create: AssetCreateLocalizationDataInput;
  readonly locale: Locale;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: AssetWhereUniqueInput;
  /** Upsert data */
  readonly data: AssetUpsertInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<AssetWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedBy?: Maybe<UserWhereInput>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly handle?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly handle_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly handle_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly handle_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly handle_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly handle_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly handle_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly handle_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly handle_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly handle_not_ends_with?: Maybe<Scalars['String']>;
  readonly fileName?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly fileName_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly fileName_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly fileName_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly fileName_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly fileName_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly fileName_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly fileName_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly fileName_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly fileName_not_ends_with?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly height_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly height_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  readonly height_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly height_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly height_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly height_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly height_gte?: Maybe<Scalars['Float']>;
  readonly width?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly width_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly width_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  readonly width_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly width_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly width_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly width_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly width_gte?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  readonly size_not?: Maybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  readonly size_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values that are not contained in given list. */
  readonly size_not_in?: Maybe<ReadonlyArray<Scalars['Float']>>;
  /** All values less than the given value. */
  readonly size_lt?: Maybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  readonly size_lte?: Maybe<Scalars['Float']>;
  /** All values greater than the given value. */
  readonly size_gt?: Maybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  readonly size_gte?: Maybe<Scalars['Float']>;
  readonly mimeType?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly mimeType_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly mimeType_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly mimeType_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly mimeType_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly mimeType_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly mimeType_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly mimeType_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly mimeType_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly mimeType_not_ends_with?: Maybe<Scalars['String']>;
  readonly backgroundVideoCategory_every?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_some?: Maybe<CategoryWhereInput>;
  readonly backgroundVideoCategory_none?: Maybe<CategoryWhereInput>;
  readonly photosPiece_every?: Maybe<PieceWhereInput>;
  readonly photosPiece_some?: Maybe<PieceWhereInput>;
  readonly photosPiece_none?: Maybe<PieceWhereInput>;
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
  /** System stage field */
  readonly stage: Stage;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Category>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly title: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly slug: Scalars['String'];
  readonly color: PageColor;
  readonly content?: Maybe<RichText>;
  readonly pieces: ReadonlyArray<Piece>;
  readonly backgroundVideo?: Maybe<Asset>;
  /** List of Category versions */
  readonly history: ReadonlyArray<Version>;
};


export type CategoryDocumentInStagesArgs = {
  stages?: ReadonlyArray<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type CategoryCreatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type CategoryUpdatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type CategoryPublishedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type CategoryPiecesArgs = {
  where?: Maybe<PieceWhereInput>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type CategoryBackgroundVideoArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type CategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type CategoryConnectInput = {
  /** Document to connect */
  readonly where: CategoryWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<CategoryEdge>;
  readonly aggregate: Aggregate;
};

export type CategoryCreateInput = {
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly title: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly slug: Scalars['String'];
  readonly color: PageColor;
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly pieces?: Maybe<PieceCreateManyInlineInput>;
  readonly backgroundVideo?: Maybe<AssetCreateOneInlineInput>;
};

export type CategoryCreateManyInlineInput = {
  /** Create and connect multiple existing Category documents */
  readonly create?: Maybe<ReadonlyArray<CategoryCreateInput>>;
  /** Connect multiple existing Category documents */
  readonly connect?: Maybe<ReadonlyArray<CategoryWhereUniqueInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Create and connect one Category document */
  readonly create?: Maybe<CategoryCreateInput>;
  /** Connect one existing Category document */
  readonly connect?: Maybe<CategoryWhereUniqueInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  /** The item at the end of the edge. */
  readonly node: Category;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedBy?: Maybe<UserWhereInput>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: Maybe<Scalars['String']>;
  readonly color?: Maybe<PageColor>;
  /** All values that are not equal to given value. */
  readonly color_not?: Maybe<PageColor>;
  /** All values that are contained in given list. */
  readonly color_in?: Maybe<ReadonlyArray<PageColor>>;
  /** All values that are not contained in given list. */
  readonly color_not_in?: Maybe<ReadonlyArray<PageColor>>;
  readonly pieces_every?: Maybe<PieceWhereInput>;
  readonly pieces_some?: Maybe<PieceWhereInput>;
  readonly pieces_none?: Maybe<PieceWhereInput>;
  readonly backgroundVideo?: Maybe<AssetWhereInput>;
};

export enum CategoryOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC'
}

export type CategoryUpdateInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly color?: Maybe<PageColor>;
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly pieces?: Maybe<PieceUpdateManyInlineInput>;
  readonly backgroundVideo?: Maybe<AssetUpdateOneInlineInput>;
};

export type CategoryUpdateManyInlineInput = {
  /** Create and connect multiple Category documents */
  readonly create?: Maybe<ReadonlyArray<CategoryCreateInput>>;
  /** Connect multiple existing Category documents */
  readonly connect?: Maybe<ReadonlyArray<CategoryConnectInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  readonly set?: Maybe<ReadonlyArray<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  readonly update?: Maybe<ReadonlyArray<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  readonly upsert?: Maybe<ReadonlyArray<CategoryUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  readonly disconnect?: Maybe<ReadonlyArray<CategoryWhereUniqueInput>>;
  /** Delete multiple Category documents */
  readonly delete?: Maybe<ReadonlyArray<CategoryWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  readonly description?: Maybe<Scalars['String']>;
  readonly color?: Maybe<PageColor>;
  readonly content?: Maybe<Scalars['RichTextAST']>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Document search */
  readonly where: CategoryWhereInput;
  /** Update many input */
  readonly data: CategoryUpdateManyInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Create and connect one Category document */
  readonly create?: Maybe<CategoryCreateInput>;
  /** Update single Category document */
  readonly update?: Maybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  readonly upsert?: Maybe<CategoryUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Category document */
  readonly connect?: Maybe<CategoryWhereUniqueInput>;
  /** Disconnect currently connected Category document */
  readonly disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Category document */
  readonly delete?: Maybe<Scalars['Boolean']>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: CategoryWhereUniqueInput;
  /** Document to update */
  readonly data: CategoryUpdateInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: CategoryCreateInput;
  /** Update document if it exists */
  readonly update: CategoryUpdateInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: CategoryWhereUniqueInput;
  /** Upsert data */
  readonly data: CategoryUpsertInput;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<CategoryWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedBy?: Maybe<UserWhereInput>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: Maybe<Scalars['String']>;
  readonly color?: Maybe<PageColor>;
  /** All values that are not equal to given value. */
  readonly color_not?: Maybe<PageColor>;
  /** All values that are contained in given list. */
  readonly color_in?: Maybe<ReadonlyArray<PageColor>>;
  /** All values that are not contained in given list. */
  readonly color_not_in?: Maybe<ReadonlyArray<PageColor>>;
  readonly pieces_every?: Maybe<PieceWhereInput>;
  readonly pieces_some?: Maybe<PieceWhereInput>;
  readonly pieces_none?: Maybe<PieceWhereInput>;
  readonly backgroundVideo?: Maybe<AssetWhereInput>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  readonly hex: Scalars['Hex'];
  readonly rgba: Rgba;
  readonly css: Scalars['String'];
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
  /** Connect document at first position */
  readonly start?: Maybe<Scalars['Boolean']>;
  /** Connect document at last position */
  readonly end?: Maybe<Scalars['Boolean']>;
};



export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
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
  readonly id: Scalars['ID'];
  readonly stage: Stage;
  readonly revision: Scalars['Int'];
  readonly createdAt: Scalars['DateTime'];
  readonly data?: Maybe<Scalars['Json']>;
};


export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly width?: Maybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  readonly height?: Maybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  readonly fit?: Maybe<ImageFit>;
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
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
  readonly distance: Scalars['Float'];
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
  /** Update one asset */
  readonly updateAsset?: Maybe<Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  readonly deleteAsset?: Maybe<Asset>;
  /** Upsert one asset */
  readonly upsertAsset?: Maybe<Asset>;
  /** Publish one asset */
  readonly publishAsset?: Maybe<Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishAsset?: Maybe<Asset>;
  /** Update many Asset documents */
  readonly updateManyAssetsConnection: AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  readonly deleteManyAssetsConnection: AssetConnection;
  /** Publish many Asset documents */
  readonly publishManyAssetsConnection: AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyAssetsConnection: AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  readonly updateManyAssets: BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  readonly deleteManyAssets: BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  readonly publishManyAssets: BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  readonly unpublishManyAssets: BatchPayload;
  /** Create one category */
  readonly createCategory?: Maybe<Category>;
  /** Update one category */
  readonly updateCategory?: Maybe<Category>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  readonly deleteCategory?: Maybe<Category>;
  /** Upsert one category */
  readonly upsertCategory?: Maybe<Category>;
  /** Publish one category */
  readonly publishCategory?: Maybe<Category>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishCategory?: Maybe<Category>;
  /** Update many Category documents */
  readonly updateManyCategoriesConnection: CategoryConnection;
  /** Delete many Category documents, return deleted documents */
  readonly deleteManyCategoriesConnection: CategoryConnection;
  /** Publish many Category documents */
  readonly publishManyCategoriesConnection: CategoryConnection;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  readonly updateManyCategories: BatchPayload;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  readonly deleteManyCategories: BatchPayload;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  readonly publishManyCategories: BatchPayload;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  readonly unpublishManyCategories: BatchPayload;
  /** Create one piece */
  readonly createPiece?: Maybe<Piece>;
  /** Update one piece */
  readonly updatePiece?: Maybe<Piece>;
  /** Delete one piece from _all_ existing stages. Returns deleted document. */
  readonly deletePiece?: Maybe<Piece>;
  /** Upsert one piece */
  readonly upsertPiece?: Maybe<Piece>;
  /** Publish one piece */
  readonly publishPiece?: Maybe<Piece>;
  /** Unpublish one piece from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  readonly unpublishPiece?: Maybe<Piece>;
  /** Update many Piece documents */
  readonly updateManyPiecesConnection: PieceConnection;
  /** Delete many Piece documents, return deleted documents */
  readonly deleteManyPiecesConnection: PieceConnection;
  /** Publish many Piece documents */
  readonly publishManyPiecesConnection: PieceConnection;
  /** Find many Piece documents that match criteria in specified stage and unpublish from target stages */
  readonly unpublishManyPiecesConnection: PieceConnection;
  /**
   * Update many pieces
   * @deprecated Please use the new paginated many mutation (updateManyPiecesConnection)
   */
  readonly updateManyPieces: BatchPayload;
  /**
   * Delete many Piece documents
   * @deprecated Please use the new paginated many mutation (deleteManyPiecesConnection)
   */
  readonly deleteManyPieces: BatchPayload;
  /**
   * Publish many Piece documents
   * @deprecated Please use the new paginated many mutation (publishManyPiecesConnection)
   */
  readonly publishManyPieces: BatchPayload;
  /**
   * Unpublish many Piece documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPiecesConnection)
   */
  readonly unpublishManyPieces: BatchPayload;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<ReadonlyArray<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
  to?: ReadonlyArray<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: ReadonlyArray<Stage>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Maybe<Stage>;
  to?: ReadonlyArray<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: ReadonlyArray<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: ReadonlyArray<Stage>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  withDefaultLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: ReadonlyArray<Stage>;
  locales?: Maybe<ReadonlyArray<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationUpdateCategoryArgs = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  where: CategoryWhereUniqueInput;
  upsert: CategoryUpsertInput;
};


export type MutationPublishCategoryArgs = {
  where: CategoryWhereUniqueInput;
  to?: ReadonlyArray<Stage>;
};


export type MutationUnpublishCategoryArgs = {
  where: CategoryWhereUniqueInput;
  from?: ReadonlyArray<Stage>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  data: CategoryUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  from?: Maybe<Stage>;
  to?: ReadonlyArray<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: ReadonlyArray<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  data: CategoryUpdateManyInput;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
};


export type MutationPublishManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  to?: ReadonlyArray<Stage>;
};


export type MutationUnpublishManyCategoriesArgs = {
  where?: Maybe<CategoryManyWhereInput>;
  from?: ReadonlyArray<Stage>;
};


export type MutationCreatePieceArgs = {
  data: PieceCreateInput;
};


export type MutationUpdatePieceArgs = {
  where: PieceWhereUniqueInput;
  data: PieceUpdateInput;
};


export type MutationDeletePieceArgs = {
  where: PieceWhereUniqueInput;
};


export type MutationUpsertPieceArgs = {
  where: PieceWhereUniqueInput;
  upsert: PieceUpsertInput;
};


export type MutationPublishPieceArgs = {
  where: PieceWhereUniqueInput;
  to?: ReadonlyArray<Stage>;
};


export type MutationUnpublishPieceArgs = {
  where: PieceWhereUniqueInput;
  from?: ReadonlyArray<Stage>;
};


export type MutationUpdateManyPiecesConnectionArgs = {
  where?: Maybe<PieceManyWhereInput>;
  data: PieceUpdateManyInput;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationDeleteManyPiecesConnectionArgs = {
  where?: Maybe<PieceManyWhereInput>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationPublishManyPiecesConnectionArgs = {
  where?: Maybe<PieceManyWhereInput>;
  from?: Maybe<Stage>;
  to?: ReadonlyArray<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUnpublishManyPiecesConnectionArgs = {
  where?: Maybe<PieceManyWhereInput>;
  stage?: Maybe<Stage>;
  from?: ReadonlyArray<Stage>;
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};


export type MutationUpdateManyPiecesArgs = {
  where?: Maybe<PieceManyWhereInput>;
  data: PieceUpdateManyInput;
};


export type MutationDeleteManyPiecesArgs = {
  where?: Maybe<PieceManyWhereInput>;
};


export type MutationPublishManyPiecesArgs = {
  where?: Maybe<PieceManyWhereInput>;
  to?: ReadonlyArray<Stage>;
};


export type MutationUnpublishManyPiecesArgs = {
  where?: Maybe<PieceManyWhereInput>;
  from?: ReadonlyArray<Stage>;
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
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  readonly pageSize?: Maybe<Scalars['Int']>;
};

export type Piece = Node & {
  /** System stage field */
  readonly stage: Stage;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<Piece>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** User that created this document */
  readonly createdBy?: Maybe<User>;
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  readonly updatedBy?: Maybe<User>;
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  readonly publishedBy?: Maybe<User>;
  readonly title: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly slug: Scalars['String'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly content?: Maybe<RichText>;
  readonly images: ReadonlyArray<Asset>;
  readonly type: PieceType;
  readonly technique?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  readonly participants: ReadonlyArray<Scalars['String']>;
  readonly category?: Maybe<Category>;
  readonly related: ReadonlyArray<Piece>;
  readonly relatedFrom: ReadonlyArray<Piece>;
  /** List of Piece versions */
  readonly history: ReadonlyArray<Version>;
};


export type PieceDocumentInStagesArgs = {
  stages?: ReadonlyArray<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type PieceCreatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceUpdatedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PiecePublishedByArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceImagesArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceCategoryArgs = {
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceRelatedArgs = {
  where?: Maybe<PieceWhereInput>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceRelatedFromArgs = {
  where?: Maybe<PieceWhereInput>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  locales?: Maybe<ReadonlyArray<Locale>>;
};


export type PieceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: Maybe<Stage>;
};

export type PieceConnectInput = {
  /** Document to connect */
  readonly where: PieceWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  readonly position?: Maybe<ConnectPositionInput>;
};

/** A connection to a list of items. */
export type PieceConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<PieceEdge>;
  readonly aggregate: Aggregate;
};

export type PieceCreateInput = {
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  readonly title: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly slug: Scalars['String'];
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly images?: Maybe<AssetCreateManyInlineInput>;
  readonly type: PieceType;
  readonly technique?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  readonly participants?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly category?: Maybe<CategoryCreateOneInlineInput>;
  readonly related?: Maybe<PieceCreateManyInlineInput>;
  readonly relatedFrom?: Maybe<PieceCreateManyInlineInput>;
};

export type PieceCreateManyInlineInput = {
  /** Create and connect multiple existing Piece documents */
  readonly create?: Maybe<ReadonlyArray<PieceCreateInput>>;
  /** Connect multiple existing Piece documents */
  readonly connect?: Maybe<ReadonlyArray<PieceWhereUniqueInput>>;
};

export type PieceCreateOneInlineInput = {
  /** Create and connect one Piece document */
  readonly create?: Maybe<PieceCreateInput>;
  /** Connect one existing Piece document */
  readonly connect?: Maybe<PieceWhereUniqueInput>;
};

/** An edge in a connection. */
export type PieceEdge = {
  /** The item at the end of the edge. */
  readonly node: Piece;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

/** Identifies documents */
export type PieceManyWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<PieceWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedBy?: Maybe<UserWhereInput>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly tags_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly tags_contains_all?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly tags_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly tags_contains_none?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly images_every?: Maybe<AssetWhereInput>;
  readonly images_some?: Maybe<AssetWhereInput>;
  readonly images_none?: Maybe<AssetWhereInput>;
  readonly type?: Maybe<PieceType>;
  /** All values that are not equal to given value. */
  readonly type_not?: Maybe<PieceType>;
  /** All values that are contained in given list. */
  readonly type_in?: Maybe<ReadonlyArray<PieceType>>;
  /** All values that are not contained in given list. */
  readonly type_not_in?: Maybe<ReadonlyArray<PieceType>>;
  readonly technique?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly technique_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly technique_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly technique_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly technique_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly technique_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly technique_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly technique_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly technique_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly technique_not_ends_with?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly dimensions_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly dimensions_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly dimensions_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly dimensions_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly dimensions_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly dimensions_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly dimensions_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly dimensions_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly dimensions_not_ends_with?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly duration_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly duration_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly duration_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly duration_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly duration_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly duration_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly duration_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly duration_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly duration_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly participants?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly participants_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly participants_contains_all?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly participants_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly participants_contains_none?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly category?: Maybe<CategoryWhereInput>;
  readonly related_every?: Maybe<PieceWhereInput>;
  readonly related_some?: Maybe<PieceWhereInput>;
  readonly related_none?: Maybe<PieceWhereInput>;
  readonly relatedFrom_every?: Maybe<PieceWhereInput>;
  readonly relatedFrom_some?: Maybe<PieceWhereInput>;
  readonly relatedFrom_none?: Maybe<PieceWhereInput>;
};

export enum PieceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TagsAsc = 'tags_ASC',
  TagsDesc = 'tags_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  TechniqueAsc = 'technique_ASC',
  TechniqueDesc = 'technique_DESC',
  DimensionsAsc = 'dimensions_ASC',
  DimensionsDesc = 'dimensions_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  ParticipantsAsc = 'participants_ASC',
  ParticipantsDesc = 'participants_DESC'
}

export enum PieceType {
  Painting = 'Painting',
  Photo = 'Photo',
  Video = 'Video'
}

export type PieceUpdateInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly images?: Maybe<AssetUpdateManyInlineInput>;
  readonly type?: Maybe<PieceType>;
  readonly technique?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  readonly participants?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly category?: Maybe<CategoryUpdateOneInlineInput>;
  readonly related?: Maybe<PieceUpdateManyInlineInput>;
  readonly relatedFrom?: Maybe<PieceUpdateManyInlineInput>;
};

export type PieceUpdateManyInlineInput = {
  /** Create and connect multiple Piece documents */
  readonly create?: Maybe<ReadonlyArray<PieceCreateInput>>;
  /** Connect multiple existing Piece documents */
  readonly connect?: Maybe<ReadonlyArray<PieceConnectInput>>;
  /** Override currently-connected documents with multiple existing Piece documents */
  readonly set?: Maybe<ReadonlyArray<PieceWhereUniqueInput>>;
  /** Update multiple Piece documents */
  readonly update?: Maybe<ReadonlyArray<PieceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Piece documents */
  readonly upsert?: Maybe<ReadonlyArray<PieceUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Piece documents */
  readonly disconnect?: Maybe<ReadonlyArray<PieceWhereUniqueInput>>;
  /** Delete multiple Piece documents */
  readonly delete?: Maybe<ReadonlyArray<PieceWhereUniqueInput>>;
};

export type PieceUpdateManyInput = {
  readonly description?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly content?: Maybe<Scalars['RichTextAST']>;
  readonly type?: Maybe<PieceType>;
  readonly technique?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  readonly participants?: Maybe<ReadonlyArray<Scalars['String']>>;
};

export type PieceUpdateManyWithNestedWhereInput = {
  /** Document search */
  readonly where: PieceWhereInput;
  /** Update many input */
  readonly data: PieceUpdateManyInput;
};

export type PieceUpdateOneInlineInput = {
  /** Create and connect one Piece document */
  readonly create?: Maybe<PieceCreateInput>;
  /** Update single Piece document */
  readonly update?: Maybe<PieceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Piece document */
  readonly upsert?: Maybe<PieceUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Piece document */
  readonly connect?: Maybe<PieceWhereUniqueInput>;
  /** Disconnect currently connected Piece document */
  readonly disconnect?: Maybe<Scalars['Boolean']>;
  /** Delete currently connected Piece document */
  readonly delete?: Maybe<Scalars['Boolean']>;
};

export type PieceUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: PieceWhereUniqueInput;
  /** Document to update */
  readonly data: PieceUpdateInput;
};

export type PieceUpsertInput = {
  /** Create document if it didn't exist */
  readonly create: PieceCreateInput;
  /** Update document if it exists */
  readonly update: PieceUpdateInput;
};

export type PieceUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  readonly where: PieceWhereUniqueInput;
  /** Upsert data */
  readonly data: PieceUpsertInput;
};

/** Identifies documents */
export type PieceWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<PieceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<PieceWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly createdBy?: Maybe<UserWhereInput>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedBy?: Maybe<UserWhereInput>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedBy?: Maybe<UserWhereInput>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly slug_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly tags?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly tags_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly tags_contains_all?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly tags_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly tags_contains_none?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly images_every?: Maybe<AssetWhereInput>;
  readonly images_some?: Maybe<AssetWhereInput>;
  readonly images_none?: Maybe<AssetWhereInput>;
  readonly type?: Maybe<PieceType>;
  /** All values that are not equal to given value. */
  readonly type_not?: Maybe<PieceType>;
  /** All values that are contained in given list. */
  readonly type_in?: Maybe<ReadonlyArray<PieceType>>;
  /** All values that are not contained in given list. */
  readonly type_not_in?: Maybe<ReadonlyArray<PieceType>>;
  readonly technique?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly technique_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly technique_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly technique_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly technique_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly technique_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly technique_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly technique_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly technique_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly technique_not_ends_with?: Maybe<Scalars['String']>;
  readonly dimensions?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly dimensions_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly dimensions_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly dimensions_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly dimensions_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly dimensions_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly dimensions_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly dimensions_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly dimensions_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly dimensions_not_ends_with?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly duration_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly duration_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly duration_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly duration_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly duration_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly duration_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly duration_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly duration_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly duration_not_ends_with?: Maybe<Scalars['String']>;
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  readonly participants?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  readonly participants_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains *all* items provided to the filter */
  readonly participants_contains_all?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array contains at least one item provided to the filter */
  readonly participants_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Matches if the field array does not contain any of the items provided to the filter */
  readonly participants_contains_none?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly category?: Maybe<CategoryWhereInput>;
  readonly related_every?: Maybe<PieceWhereInput>;
  readonly related_some?: Maybe<PieceWhereInput>;
  readonly related_none?: Maybe<PieceWhereInput>;
  readonly relatedFrom_every?: Maybe<PieceWhereInput>;
  readonly relatedFrom_some?: Maybe<PieceWhereInput>;
  readonly relatedFrom_none?: Maybe<PieceWhereInput>;
};

/** References Piece record uniquely */
export type PieceWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  readonly locale: Locale;
  /** Stages to publish selected locales to */
  readonly stages: ReadonlyArray<Stage>;
};

export type Query = {
  /** Fetches an object given its ID */
  readonly node?: Maybe<Node>;
  /** Retrieve multiple assets */
  readonly assets: ReadonlyArray<Asset>;
  /** Retrieve a single asset */
  readonly asset?: Maybe<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  readonly assetsConnection: AssetConnection;
  /** Retrieve document version */
  readonly assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple categories */
  readonly categories: ReadonlyArray<Category>;
  /** Retrieve a single category */
  readonly category?: Maybe<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  readonly categoriesConnection: CategoryConnection;
  /** Retrieve document version */
  readonly categoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pieces */
  readonly pieces: ReadonlyArray<Piece>;
  /** Retrieve a single piece */
  readonly piece?: Maybe<Piece>;
  /** Retrieve multiple pieces using the Relay connection interface */
  readonly piecesConnection: PieceConnection;
  /** Retrieve document version */
  readonly pieceVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple users */
  readonly users: ReadonlyArray<User>;
  /** Retrieve a single user */
  readonly user?: Maybe<User>;
  /** Retrieve multiple users using the Relay connection interface */
  readonly usersConnection: UserConnection;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCategoriesArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryCategoriesConnectionArgs = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPiecesArgs = {
  where?: Maybe<PieceWhereInput>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryPieceArgs = {
  where: PieceWhereUniqueInput;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryPiecesConnectionArgs = {
  where?: Maybe<PieceWhereInput>;
  orderBy?: Maybe<PieceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryPieceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: ReadonlyArray<Locale>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  readonly r: Scalars['RGBAHue'];
  readonly g: Scalars['RGBAHue'];
  readonly b: Scalars['RGBAHue'];
  readonly a: Scalars['RGBATransparency'];
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  readonly r: Scalars['RGBAHue'];
  readonly g: Scalars['RGBAHue'];
  readonly b: Scalars['RGBAHue'];
  readonly a: Scalars['RGBATransparency'];
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns AST representation */
  readonly raw: Scalars['RichTextAST'];
  /** Returns HTMl representation */
  readonly html: Scalars['String'];
  /** Returns Markdown representation */
  readonly markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  readonly text: Scalars['String'];
};


/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  readonly locale: Locale;
  /** Stages to unpublish selected locales from */
  readonly stages: ReadonlyArray<Stage>;
};

/** User system model */
export type User = Node & {
  /** System stage field */
  readonly stage: Stage;
  /** Get the document in other stages */
  readonly documentInStages: ReadonlyArray<User>;
  /** The unique identifier */
  readonly id: Scalars['ID'];
  /** The time the document was created */
  readonly createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  readonly updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  readonly name: Scalars['String'];
  /** Profile Picture url */
  readonly picture?: Maybe<Scalars['String']>;
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  readonly kind: UserKind;
  /** Flag to determine if user is active or not */
  readonly isActive: Scalars['Boolean'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  stages?: ReadonlyArray<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

/** A connection to a list of items. */
export type UserConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<UserEdge>;
  readonly aggregate: Aggregate;
};

/** An edge in a connection. */
export type UserEdge = {
  /** The item at the end of the edge. */
  readonly node: User;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
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
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<UserWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly picture_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: Maybe<Scalars['String']>;
  readonly kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  readonly kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: Maybe<ReadonlyArray<UserKind>>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: Maybe<ReadonlyArray<UserKind>>;
  readonly isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: Maybe<Scalars['Boolean']>;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC'
}

/** Identifies documents */
export type UserWhereInput = {
  /** Contains search across all appropriate fields. */
  readonly _search?: Maybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<UserWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly publishedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly publishedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly publishedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly publishedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly publishedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly publishedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly publishedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly picture?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly picture_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly picture_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly picture_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values containing the given string. */
  readonly picture_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly picture_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly picture_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly picture_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly picture_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string */
  readonly picture_not_ends_with?: Maybe<Scalars['String']>;
  readonly kind?: Maybe<UserKind>;
  /** All values that are not equal to given value. */
  readonly kind_not?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  readonly kind_in?: Maybe<ReadonlyArray<UserKind>>;
  /** All values that are not contained in given list. */
  readonly kind_not_in?: Maybe<ReadonlyArray<UserKind>>;
  readonly isActive?: Maybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  readonly isActive_not?: Maybe<Scalars['Boolean']>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type Version = {
  readonly id: Scalars['ID'];
  readonly stage: Stage;
  readonly revision: Scalars['Int'];
  readonly createdAt: Scalars['DateTime'];
};

export type VersionWhereInput = {
  readonly id: Scalars['ID'];
  readonly stage: Stage;
  readonly revision: Scalars['Int'];
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
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
  Localization = 'localization',
  Combined = 'combined'
}

export type GetCategoriesQueryVariables = Exact<{
  stage: Stage;
}>;


export type GetCategoriesQuery = { readonly categories: ReadonlyArray<(
    { readonly backgroundVideo?: Maybe<Pick<Asset, 'mimeType' | 'url'>> }
    & CategoryFragmentFragment
  )> };

export type GetHeaderQueryVariables = Exact<{
  stage: Stage;
}>;


export type GetHeaderQuery = { readonly categories: ReadonlyArray<CategoryFragmentFragment> };

export type GetCategoryQueryVariables = Exact<{
  slug: Scalars['String'];
  stage: Stage;
}>;


export type GetCategoryQuery = { readonly categories: ReadonlyArray<(
    CategoryFragmentFragment
    & PiecesFragmentFragment
  )>, readonly category?: Maybe<(
    Pick<Category, 'description'>
    & { readonly content?: Maybe<Pick<RichText, 'markdown'>> }
    & CategoryFragmentFragment
    & PiecesFragmentFragment
  )> };

export type GetPieceQueryVariables = Exact<{
  slug: Scalars['String'];
  stage: Stage;
}>;


export type GetPieceQuery = { readonly categories: ReadonlyArray<(
    CategoryFragmentFragment
    & PiecesFragmentFragment
  )>, readonly piece?: Maybe<(
    Pick<Piece, 'id' | 'title' | 'slug' | 'description'>
    & { readonly category?: Maybe<Pick<Category, 'title' | 'color'>>, readonly content?: Maybe<Pick<RichText, 'markdown'>>, readonly images: ReadonlyArray<(
      Pick<Asset, 'mimeType'>
      & { jpg: Asset['url'], webp: Asset['url'] }
    )>, readonly related: ReadonlyArray<(
      Pick<Piece, 'id' | 'title' | 'slug'>
      & { readonly category?: Maybe<Pick<Category, 'title' | 'color'>> }
    )> }
  )> };

export type PiecesFragmentFragment = { readonly pieces: ReadonlyArray<(
    Pick<Piece, 'id' | 'title' | 'slug'>
    & { readonly images: ReadonlyArray<(
      Pick<Asset, 'mimeType'>
      & { jpg: Asset['url'], webp: Asset['url'] }
    )> }
  )> };

export type CategoryFragmentFragment = Pick<Category, 'id' | 'title' | 'slug' | 'color'>;

export const PiecesFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PiecesFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pieces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mimeType_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"image/jpeg","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","alias":{"kind":"Name","value":"jpg"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"jpg"}}]}}]}}]}}]},{"kind":"Field","alias":{"kind":"Name","value":"webp"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"webp"}}]}}]}}]}}]}]}}]}}]}}]} as unknown as DocumentNode<PiecesFragmentFragment, unknown>;
export const CategoryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CategoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Category"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<CategoryFragmentFragment, unknown>;
export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},...CategoryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetHeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHeader"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}}]}}]}},...CategoryFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetHeaderQuery, GetHeaderQueryVariables>;
export const GetCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PiecesFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PiecesFragment"}}]}}]}},...CategoryFragmentFragmentDoc.definitions,...PiecesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetPieceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPiece"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stage"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CategoryFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PiecesFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"piece"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markdown"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"mimeType_in"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"image/jpeg","block":false}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","alias":{"kind":"Name","value":"jpg"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"jpg"}}]}}]}}]}}]},{"kind":"Field","alias":{"kind":"Name","value":"webp"},"name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transformation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"resize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"width"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"height"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"document"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"output"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"webp"}}]}}]}}]}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"related"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]}}]}},...CategoryFragmentFragmentDoc.definitions,...PiecesFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPieceQuery, GetPieceQueryVariables>;