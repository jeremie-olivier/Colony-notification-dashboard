/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Colony } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ColonyUpdateFormInputValues = {
    name?: string;
    url?: string;
};
export declare type ColonyUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ColonyUpdateFormOverridesProps = {
    ColonyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ColonyUpdateFormProps = React.PropsWithChildren<{
    overrides?: ColonyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    colony?: Colony;
    onSubmit?: (fields: ColonyUpdateFormInputValues) => ColonyUpdateFormInputValues;
    onSuccess?: (fields: ColonyUpdateFormInputValues) => void;
    onError?: (fields: ColonyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ColonyUpdateFormInputValues) => ColonyUpdateFormInputValues;
    onValidate?: ColonyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ColonyUpdateForm(props: ColonyUpdateFormProps): React.ReactElement;
