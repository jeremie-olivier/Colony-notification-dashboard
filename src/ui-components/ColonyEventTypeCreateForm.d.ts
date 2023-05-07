/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ColonyEventTypeCreateFormInputValues = {
    type?: string;
};
export declare type ColonyEventTypeCreateFormValidationValues = {
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ColonyEventTypeCreateFormOverridesProps = {
    ColonyEventTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ColonyEventTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: ColonyEventTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ColonyEventTypeCreateFormInputValues) => ColonyEventTypeCreateFormInputValues;
    onSuccess?: (fields: ColonyEventTypeCreateFormInputValues) => void;
    onError?: (fields: ColonyEventTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ColonyEventTypeCreateFormInputValues) => ColonyEventTypeCreateFormInputValues;
    onValidate?: ColonyEventTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function ColonyEventTypeCreateForm(props: ColonyEventTypeCreateFormProps): React.ReactElement;
