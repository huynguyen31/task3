/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthorCreateFormInputValues = {
    name_name?: string;
    avatar?: string;
    age?: number;
};
export declare type AuthorCreateFormValidationValues = {
    name_name?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorCreateFormOverridesProps = {
    AuthorCreateFormGrid?: FormProps<GridProps>;
    name_name?: FormProps<TextFieldProps>;
    avatar?: FormProps<TextFieldProps>;
    age?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthorCreateFormInputValues) => AuthorCreateFormInputValues;
    onSuccess?: (fields: AuthorCreateFormInputValues) => void;
    onError?: (fields: AuthorCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AuthorCreateFormInputValues) => AuthorCreateFormInputValues;
    onValidate?: AuthorCreateFormValidationValues;
}>;
export default function AuthorCreateForm(props: AuthorCreateFormProps): React.ReactElement;
