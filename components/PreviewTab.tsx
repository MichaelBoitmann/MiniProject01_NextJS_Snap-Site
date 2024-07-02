type Props = {
  children: React.ReactNode
}

export default function PreviewTab({ children }: Props) {
  return (
    <button >
      {children}
    </button>
  );
}
