import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import { get } from "lodash/fp";

interface RHFTextInputProps {
  name: string;
}

const RHFTextInput = ({ name }: RHFTextInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      rules={{
        required: true,
      }}
      defaultValue=""
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={name}
          error={!!get(name)(errors)}
          helperText={get(`${name}.message`)(errors)}
        />
        // <Typography> {name} </Typography>
      )}
    />
  );
};

export default RHFTextInput;
