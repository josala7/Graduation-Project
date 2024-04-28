import { Tooltip, IconButton, Grid } from "@mui/material";
import { CiViewTable } from "react-icons/ci";
import { PiCardsThin } from "react-icons/pi";

function TableCardSwitch({ showTable, setShowTable }) {
  return (
    <Grid container spacing={0} alignItems="center" width={"fit-content"}>
      <Grid item>
        <Tooltip title="عرض في جدول">
          <IconButton onClick={() => setShowTable(true)}>
            <CiViewTable
              style={{
                color: showTable ? "#0c0661" : "#8a8a8a",
              }}
            />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="عرض في بطاقات">
          <IconButton onClick={() => setShowTable(false)}>
            <PiCardsThin
              style={{
                color: !showTable ? "#0c0661" : "#8a8a8a",
              }}
            />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

export default TableCardSwitch;
