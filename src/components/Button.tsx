import clsx from "clsx";

type ButtonProps = {
  title: string; // Title text for the button
  id?: string; // Optional ID for the button
  rightIcon?: React.ReactNode; // Optional right icon
  leftIcon?: React.ReactNode; // Optional left icon
  containerClass?: string; // Optional additional CSS classes for the button container
};

const Button: React.FC<ButtonProps> = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={clsx(
        containerClass,
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
      )}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
