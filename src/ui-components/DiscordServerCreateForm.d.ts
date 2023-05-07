/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiscordServerCreateFormInputValues = {
    hasColonyNotificationBotAdded?: boolean;
    idDiscord?: string;
    name?: string;
};
export declare type DiscordServerCreateFormValidationValues = {
    hasColonyNotificationBotAdded?: ValidationFunction<boolean>;
    idDiscord?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiscordServerCreateFormOverridesProps = {
    DiscordServerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hasColonyNotificationBotAdded?: PrimitiveOverrideProps<SwitchFieldProps>;
    idDiscord?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiscordServerCreateFormProps = React.PropsWithChildren<{
    overrides?: DiscordServerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DiscordServerCreateFormInputValues) => DiscordServerCreateFormInputValues;
    onSuccess?: (fields: DiscordServerCreateFormInputValues) => void;
    onError?: (fields: DiscordServerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiscordServerCreateFormInputValues) => DiscordServerCreateFormInputValues;
    onValidate?: DiscordServerCreateFormValidationValues;
} & React.CSSProperties>;
export default function DiscordServerCreateForm(props: DiscordServerCreateFormProps): React.ReactElement;
