import { styled } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/styles/withStyles";
import { memoize } from "lodash";
import { createElement, ElementType } from "react";

export const styledWithProps =
  <StyledProps extends {}, ComponentProps>(
    element: ElementType<ComponentProps>,
    styledProps: (keyof StyledProps)[],
    addStaticProps: Partial<ComponentProps> = {}
  ) =>
  (
    styles:
      | CreateCSSProperties<StyledProps>
      | ((
          props: { theme: Theme } & StyledProps
        ) => CreateCSSProperties<StyledProps>)
  ) =>
    styled((props: ComponentProps) =>
      createElement(
        //@ts-ignore
        element,
        getElementProps(props, styledProps, addStaticProps)
      )
    )<Theme, StyledProps>(styles);

const getElementProps = memoize(
  (props: any, styledProps: any, addStaticProps: any) =>
    Object.keys(props)
      .filter((key) => !styledProps.includes(key as never))
      .reduce((obj, key) => {
        obj[key] = props[key];
        return obj;
      }, addStaticProps)
);
