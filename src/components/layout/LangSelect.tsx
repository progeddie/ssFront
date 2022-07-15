import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import america from "@images/sample/america.png";
import korea from "@images/sample/korea.png";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      top: -25,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
interface langSelect {
  lang: string;
}
const LangSelect: React.FC<langSelect> = ({ lang }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [state, setState] = useState<{ lang: string }>({
    lang: lang,
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => {
    const name = event.target.name as keyof typeof state;

    setState({
      ...state,
      [name]: event.target.value,
    });
    navigate(`/${event.target.value}`, { replace: true });
  };

  const textArr =
    lang === "en"
      ? {
          0: "ENGLISH",
          1: "KOREAN",
          2: "Language Select",
        }
      : {
          0: "영어",
          1: "한국어",
          2: "언어 선택",
        };

  return (
    <div>
      {lang === "en" ? (
        <img src={america} className="top_flag" />
      ) : (
        <img src={korea} className="top_flag" />
      )}
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={state.lang}
          onChange={handleChange}
          name="lang"
          className={classes.selectEmpty}
          inputProps={{ "aria-label": "lang" }}
        >
          <option value={"en"}>{textArr[0]}</option>
          <option value={"ko"}>{textArr[1]}</option>
        </NativeSelect>
        <FormHelperText>{textArr[2]}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default LangSelect;
