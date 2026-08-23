import Button from "../ui/Button";

function PageHeader({
  title,
  description,
  actionIcon: ActionIcon,
  actionLabel,
  onAction,
}) {
  return (
    <div
      className="
        mb-4
        mt-2
        flex
        items-center
        justify-between
        gap-3
        sm:mb-3
        sm:gap-4
      "
    >
      {/* Left */}
      <div className="min-w-0 flex-1">
        <h1 className="text-2xl font-bold text-slate-800 lg:text-3xl">
          {title}
        </h1>

        {description && (
          <p className="mt-1 hidden text-sm text-slate-500 lg:block">
            {description}
          </p>
        )}
      </div>

      {/* Right */}
      {actionLabel && (
        <Button onClick={onAction} variant="primary" >
          {ActionIcon && (
            <ActionIcon
              size={16}
              className="sm:h-[18px] sm:w-[18px]"
            />
          )}

          <span className="whitespace-nowrap">
            {actionLabel}
          </span>
        </Button>
      )}
    </div>
  );
}

export default PageHeader;