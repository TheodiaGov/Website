export type {
    I18nBundle,
    I18nKey,
}

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** The schema for an i18n bundle. */
type I18nBundle = {
    [module in string]?: I18nKey
};

//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //
/** The schema for an i18n key. */
type I18nKey = {
    [lang in string]?: string;
} & {
    /** English is required. */
    en: string;
};
