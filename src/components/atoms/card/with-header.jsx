import { Box, Card, CardHeader } from "@mui/material";

export const CardWithHeader = ({
  children,
  icon,
  label,
  sx,
  colorHeader,
  endComponent,
  textColor,
  ...restProps
}) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        px: 3,
        pb: 4,
        overflow: "visible",
        boxShadow: "none",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingY: "24px",
          ...(label && label.length && {
            paddingY: "24px",
          })
        }}
      >
        <CardHeader
          sx={{ 
            background: colorHeader ? colorHeader : "#FFFFFF", 
            color: "#084F8C", 
            p: 0, 
            width: "100%"
          }} // Fix background color syntax
          avatar={icon}
          title={label}
          titleTypographyProps={{ 
            fontSize: "20px", 
            fontWeight: 600, 
            color: textColor ? textColor : "#000000" 
          }}
        />
        {endComponent ? (
          <div className="flex items-center">{endComponent}</div>
        ) : null}
      </Box>
      <div className="text-sm" {...restProps}>
        {children}
      </div>
    </Card>
  );
};