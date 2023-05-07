/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { DiscordServer } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DiscordServerCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    hasColonyNotificationBotAdded: false,
    idDiscord: "",
    name: "",
  };
  const [hasColonyNotificationBotAdded, setHasColonyNotificationBotAdded] =
    React.useState(initialValues.hasColonyNotificationBotAdded);
  const [idDiscord, setIdDiscord] = React.useState(initialValues.idDiscord);
  const [name, setName] = React.useState(initialValues.name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setHasColonyNotificationBotAdded(
      initialValues.hasColonyNotificationBotAdded
    );
    setIdDiscord(initialValues.idDiscord);
    setName(initialValues.name);
    setErrors({});
  };
  const validations = {
    hasColonyNotificationBotAdded: [],
    idDiscord: [],
    name: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          hasColonyNotificationBotAdded,
          idDiscord,
          name,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new DiscordServer(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DiscordServerCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Has colony notification bot added"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasColonyNotificationBotAdded}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              hasColonyNotificationBotAdded: value,
              idDiscord,
              name,
            };
            const result = onChange(modelFields);
            value = result?.hasColonyNotificationBotAdded ?? value;
          }
          if (errors.hasColonyNotificationBotAdded?.hasError) {
            runValidationTasks("hasColonyNotificationBotAdded", value);
          }
          setHasColonyNotificationBotAdded(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "hasColonyNotificationBotAdded",
            hasColonyNotificationBotAdded
          )
        }
        errorMessage={errors.hasColonyNotificationBotAdded?.errorMessage}
        hasError={errors.hasColonyNotificationBotAdded?.hasError}
        {...getOverrideProps(overrides, "hasColonyNotificationBotAdded")}
      ></SwitchField>
      <TextField
        label="Id discord"
        isRequired={false}
        isReadOnly={false}
        value={idDiscord}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hasColonyNotificationBotAdded,
              idDiscord: value,
              name,
            };
            const result = onChange(modelFields);
            value = result?.idDiscord ?? value;
          }
          if (errors.idDiscord?.hasError) {
            runValidationTasks("idDiscord", value);
          }
          setIdDiscord(value);
        }}
        onBlur={() => runValidationTasks("idDiscord", idDiscord)}
        errorMessage={errors.idDiscord?.errorMessage}
        hasError={errors.idDiscord?.hasError}
        {...getOverrideProps(overrides, "idDiscord")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hasColonyNotificationBotAdded,
              idDiscord,
              name: value,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
