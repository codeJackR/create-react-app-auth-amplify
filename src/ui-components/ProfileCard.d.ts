/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Creator } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type ProfileCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    creator?: Creator;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ProfileCard(props: ProfileCardProps): React.ReactElement;
