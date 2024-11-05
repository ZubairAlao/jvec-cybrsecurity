import Button from "../ui/button/button";

export const MainErrorFallback = ({error, resetErrorBoundary}) => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-white"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :(</h2>
      <p>{error.message}</p>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
        children={"Refresh"}
      />
    </div>
  );
};
