/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Blog } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Flex,
  Text,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSevenZeroZeroNineValue,
    setTextFieldTwoNineSevenSixSevenZeroZeroNineValue,
  ] = useStateMutationAction("");
  const [textAreaFieldValue, setTextAreaFieldValue] =
    useStateMutationAction("");
  const [
    textFieldThreeFiveZeroZeroTwoSixOneNineValue,
    setTextFieldThreeFiveZeroZeroTwoSixOneNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveZeroZeroTwoSixThreeThreeValue,
    setTextFieldThreeFiveZeroZeroTwoSixThreeThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveZeroOneTwoSixFourOneValue,
    setTextFieldThreeFiveZeroOneTwoSixFourOneValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      title: textFieldTwoNineSevenSixSevenZeroZeroNineValue,
      text: textAreaFieldValue,
      author_name: textFieldThreeFiveZeroZeroTwoSixOneNineValue,
      picture: textFieldThreeFiveZeroZeroTwoSixThreeThreeValue,
      authorID: textFieldThreeFiveZeroOneTwoSixFourOneValue,
    },
    model: Blog,
    schema: schema,
  });
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1292px"
      height="867px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 37px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FormCheckout")}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="804px"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="32px 73px 75px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="455px"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 52px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="392px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="800"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Info"
              {...getOverrideProps(overrides, "Info")}
            ></Text>
            <TextField
              display="flex"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Title"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldTwoNineSevenSixSevenZeroZeroNineValue}
              onChange={(event) => {
                setTextFieldTwoNineSevenSixSevenZeroZeroNineValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField29767009")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Author"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldThreeFiveZeroZeroTwoSixOneNineValue}
              onChange={(event) => {
                setTextFieldThreeFiveZeroZeroTwoSixOneNineValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField35002619")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Picture"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldThreeFiveZeroZeroTwoSixThreeThreeValue}
              onChange={(event) => {
                setTextFieldThreeFiveZeroZeroTwoSixThreeThreeValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField35002633")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldThreeFiveZeroOneTwoSixFourOneValue}
              onChange={(event) => {
                setTextFieldThreeFiveZeroOneTwoSixFourOneValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField35012641")}
            ></TextField>
            <TextAreaField
              display="flex"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Content"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textAreaFieldValue}
              onChange={(event) => {
                setTextAreaFieldValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextAreaField")}
            ></TextAreaField>
            <Button
              display="flex"
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Save"
              onClick={() => {
                buttonOnClick();
              }}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
