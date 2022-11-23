/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Author } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthorUpdateFormInputValues = {
    name_name?: string;
    avatar?: string;
    age?: number;
};
export declare type AuthorUpdateFormValidationValues = {
    name_name?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorUpdateFormOverridesProps = {
    AuthorUpdateFormGrid?: FormProps<GridProps>;
    name_name?: FormProps<TextFieldProps>;
    avatar?: FormProps<TextFieldProps>;
    age?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorUpdateFormProps = React.PropsWithChildren<{
    overrides?: AuthorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    author?: Author;
    onSubmit?: (fields: AuthorUpdateFormInputValues) => AuthorUpdateFormInputValues;
    onSuccess?: (fields: AuthorUpdateFormInputValues) => void;
    onError?: (fields: AuthorUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AuthorUpdateFormInputValues) => AuthorUpdateFormInputValues;
    onValidate?: AuthorUpdateFormValidationValues;
}>;
export default function AuthorUpdateForm(props: AuthorUpdateFormProps): React.ReactElement;
