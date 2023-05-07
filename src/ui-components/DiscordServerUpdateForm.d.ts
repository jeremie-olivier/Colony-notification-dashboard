/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DiscordServer } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DiscordServerUpdateFormInputValues = {
    hasColonyNotificationBotAdded?: boolean;
    idDiscord?: string;
    name?: string;
};
export declare type DiscordServerUpdateFormValidationValues = {
    hasColonyNotificationBotAdded?: ValidationFunction<boolean>;
    idDiscord?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DiscordServerUpdateFormOverridesProps = {
    DiscordServerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hasColonyNotificationBotAdded?: PrimitiveOverrideProps<SwitchFieldProps>;
    idDiscord?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DiscordServerUpdateFormProps = React.PropsWithChildren<{
    overrides?: DiscordServerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    discordServer?: DiscordServer;
    onSubmit?: (fields: DiscordServerUpdateFormInputValues) => DiscordServerUpdateFormInputValues;
    onSuccess?: (fields: DiscordServerUpdateFormInputValues) => void;
    onError?: (fields: DiscordServerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DiscordServerUpdateFormInputValues) => DiscordServerUpdateFormInputValues;
    onValidate?: DiscordServerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DiscordServerUpdateForm(props: DiscordServerUpdateFormProps): React.ReactElement;
