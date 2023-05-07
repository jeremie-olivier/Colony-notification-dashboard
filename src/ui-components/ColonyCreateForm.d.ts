/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ColonyCreateFormInputValues = {
    name?: string;
    url?: string;
};
export declare type ColonyCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ColonyCreateFormOverridesProps = {
    ColonyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ColonyCreateFormProps = React.PropsWithChildren<{
    overrides?: ColonyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ColonyCreateFormInputValues) => ColonyCreateFormInputValues;
    onSuccess?: (fields: ColonyCreateFormInputValues) => void;
    onError?: (fields: ColonyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ColonyCreateFormInputValues) => ColonyCreateFormInputValues;
    onValidate?: ColonyCreateFormValidationValues;
} & React.CSSProperties>;
export default function ColonyCreateForm(props: ColonyCreateFormProps): React.ReactElement;
