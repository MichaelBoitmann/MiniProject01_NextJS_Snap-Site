import clsx from "clsx"

type Props = {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void
}

export default function PreviewTab({ children, active, onClick }: Props) {

  return (
    <button 
      onClick={onClick}
      className={clsx(
        active 
          ?  "text-white bg-blue-500" 
          : "text-blue-500 bg-transparent hover:bg-blue-100 focus:bg-blue-100",
          "px-4 py-2 text-sm rounded-lg font-medium focus:ring focus:outline-none")}
    >
      {children} 
    </button>
  );
}
