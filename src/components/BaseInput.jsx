import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
function BaseInput({ label, subText, ...props }) {
  return (
    <div>
      <FormControl sx={{ width: "100%" }} variant="standard">
        {label ? (
          <FormHelperText
            className="!mt-0 !leading-[14px] !mb-1 !ml-2 !font-SFProDisplay !font-normal"
            id="outlined-weight-helper-text"
          >
            {label}
          </FormHelperText>
        ) : null}
        <OutlinedInput
          id="outlined-adornment-weight"
          {...props}
          size="small"
          className="!text-base !leading-5 py-0.5 !pl-2 !font-SFProDisplay !font-normal"
          startAdornment={
            <InputAdornment
              position="start"
              className="!text-base !leading-5 !text-black"
            >
              {subText ? subText : ""}
              <span className="p-1 pr-0 font-light text-gray-300">|</span>
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
    </div>
  );
}

export default BaseInput;
