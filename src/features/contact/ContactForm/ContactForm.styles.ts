import { Grid } from "@/ui";
import { styled } from "@/ui/stitches.config";

export const Container = styled(Grid, {
  paddingBlock: "$16",
});

export const Title = styled("h1", {
  fontSize: "$3xl",
  lineHeight: "$3xl",
});

export const Description = styled("p", {
  color: "$gray500",
  fontSize: "$md",
  lineHeight: "$md",
  marginTop: "$5",
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$12",
  marginTop: "$12",
});

export const FieldGroup = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "$12 $5",
});

export const Field = styled("fieldset", {
  position: "relative",

  display: "flex",
  flexDirection: "column",

  border: 0,
});

export const Label = styled("label", {
  position: "absolute",
  background: "$white",
  paddingInline: "$2",

  left: "20px",
  top: "-10px",

  fontSize: "$sm",
  lineHeight: "$sm",
});

export const Input = styled("input", {
  height: "48px",
  paddingInline: "$7",

  border: "1px solid $gray100",
  color: "$black",

  "&::placeholder": {
    color: "$gray400",
  },
});

export const TextArea = styled("textarea", {
  height: "175px",
  paddingInline: "$7",
  paddingTop: "$3",

  border: "1px solid $gray100",
  color: "$black",

  resize: "none",
});

export const Tag = styled("button", {
  background: "$white",
  color: "$black",

  border: "1px solid $gray200",
  padding: "$3 $6",

  height: "44px",
  borderRadius: "30px",

  transition: "$default",
  variants: {
    selected: {
      true: {
        borderColor: "$black",
        background: "$black",
        color: "$white",
      },
      false: {
        "&:hover": {
          filter: "brightness(0.95)",
        },

        "&:focus": {
          borderColor: "$black",
        },
      },
    },
  },

  defaultVariants: {
    selected: false,
  },
});

export const TagGroup = styled("div", {
  display: "flex",
  gap: "$5",
  marginTop: "$3",
});
