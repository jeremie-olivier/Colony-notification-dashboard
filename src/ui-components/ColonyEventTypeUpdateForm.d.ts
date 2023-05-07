/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ColonyEventType } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ColonyEventTypeUpdateFormInputValues = {
    type?: string;
};
export declare type ColonyEventTypeUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ColonyEventTypeUpdateFormOverridesProps = {
    ColonyEventTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ColonyEventTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: ColonyEventTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    colonyEventType?: ColonyEventType;
    onSubmit?: (fields: ColonyEventTypeUpdateFormInputValues) => ColonyEventTypeUpdateFormInputValues;
    onSuccess?: (fields: ColonyEventTypeUpdateFormInputValues) => void;
    onError?: (fields: ColonyEventTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ColonyEventTypeUpdateFormInputValues) => ColonyEventTypeUpdateFormInputValues;
    onValidate?: ColonyEventTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ColonyEventTypeUpdateForm(props: ColonyEventTypeUpdateFormProps): React.ReactElement;
