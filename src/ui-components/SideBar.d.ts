/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Blog } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    blog?: Blog;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
