import { Card, Stack, Skeleton } from "@mui/material";

const AppCardSkeleton = () => {
  return (
    <Card
      component={Stack}
      p={2}
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        borderRadius: 3,
      }}
    >
      <Skeleton variant="rectangular" height={250} />

      <Stack pt={3} pb={2} flex={1}>
        <Stack spacing={2} flex={1} pb={3}>
          <Skeleton variant="text" width={200} height={24} />
          <Skeleton variant="text" width={100} height={20} />
        </Stack>

        <Skeleton variant="text" width={120} height={40} />
      </Stack>
    </Card>
  );
};

export default AppCardSkeleton;
