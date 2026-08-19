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
        <button
          type="button"
          onClick={onAction}
          className="
            inline-flex
            shrink-0
            items-center
            justify-center
            gap-1.5
            rounded-lg
            bg-green-600
            px-3
            py-2
            text-xs
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-green-700
            active:scale-95

            sm:gap-2
            sm:rounded-xl
            sm:px-4
            sm:py-2.5
            sm:text-sm

            lg:px-5
            lg:py-3
          "
        >
          {ActionIcon && (
            <ActionIcon
              size={16}
              className="sm:h-[18px] sm:w-[18px]"
            />
          )}

          <span className="whitespace-nowrap">
            {actionLabel}
          </span>
        </button>
      )}
    </div>
  );
}

export default PageHeader;