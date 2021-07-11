import React, { useState } from "react";
import styled from "@emotion/styled";
import * as glamor from "glamor";

export const TOGGLE_WIDTH = 48;
export const TOGGLE_HEIGHT = 30;
export const TOGGLE_BORDER_RADIUS = 3;
export const notificationTargetHeight = 28;

export const uniformBorderRadius = (value) => ({
  borderTopLeftRadius: value,
  borderTopRightRadius: value,
  borderBottomRightRadius: value,
  borderBottomLeftRadius: value
});

export const uniformBorderWidth = (value) => ({
  borderRightWidth: value,
  borderBottomWidth: value,
  borderLeftWidth: value,
  borderTopWidth: value
});

const ToggleHolder = styled("div")(
  {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    height: notificationTargetHeight,
    width: 90,
    lineHeight: notificationTargetHeight,
    fontSize: 15,
    textAlign: "center",
    ":hover": {
      cursor: "pointer"
    }
  },
  ({ isActive, shouldAnimate }) => {
    const toggleOnKeyFrames = glamor.css.keyframes({
      "0%": { right: 46 },
      "20%": { right: 30 },
      "100%": { right: 0 }
    });
    const toggleOffKeyFrames = glamor.css.keyframes({
      "0%": { right: 20 },
      "20%": { right: 30 },
      "100%": { right: 46 }
    });
    return {
      animation: !shouldAnimate
        ? undefined
        : `${isActive ? toggleOnKeyFrames : toggleOffKeyFrames} 0.24s ease-out`,
      right: isActive ? 0 : 46
    };
  }
);

const Root = styled("div")(
  {
    overflow: "hidden",
    height: TOGGLE_HEIGHT,
    width: TOGGLE_WIDTH,
    borderStyle: "solid",
    marginLeft: 20,
    ...uniformBorderRadius(TOGGLE_BORDER_RADIUS),
    ...uniformBorderWidth(1)
  },
  ({ isActive }) => {
    return {
      borderColor: isActive ? "#45b5e6" : "#fff"
    };
  }
);

const HolderLabel = styled("div")({
  position: "absolute",
  top: 0,
  display: "flex",
  boxSizing: "content-box",
  justifyContent: "center",
  flexDirection: "column",
  height: 22,
  lineHeight: 15,
  fontSize: 16,
  verticalAlign: "middle",
  textAlign: "center",
  ":hover": {
    cursor: "pointer"
  }
});

const OnLabel = styled(HolderLabel)({
  right: 44,
  paddingTop: 4,
  paddingRight: 19.5,
  paddingBottom: 4,
  paddingLeft: 9.5,
  color: "#fff",
  backgroundColor: "#45b5e6",
  ":hover": {
    backgroundColor: "#0090d0"
  }
});

const OffLabel = styled(HolderLabel)({
  left: 46,
  paddingTop: 4,
  paddingRight: 7.5,
  paddingBottom: 4,
  paddingLeft: 19.5,
  backgroundColor: "#45b5e6", // this supports the bootstrap color that the frontend uses for its toggle
  ":hover": {
    backgroundColor: "#0090d0"
  }
});

const ToggleHandle = styled("div")({
  position: "absolute",
  top: 0,
  left: 32,
  width: 26,
  height: notificationTargetHeight,
  ...uniformBorderRadius(3),
  backgroundColor: "#fff",
  boxShadow: "0 8px 20px 0 rgba(0, 0, 0, 0.25)",
  zIndex: 1,
  pointerEvents: "none",
  ":hover": {
    cursor: "pointer"
  }
});

const Toggle = ({ isOn, onToggle }) => {
  return (
    <Root isActive={isOn}>
      <ToggleHolder isActive={isOn} shouldAnimate={true} onClick={onToggle}>
        <OnLabel>
          <div>C&deg;</div>
        </OnLabel>
        <ToggleHandle />
        <OffLabel>
          <div>F&deg;</div>
        </OffLabel>
      </ToggleHolder>
    </Root>
  );
};

export default Toggle;
