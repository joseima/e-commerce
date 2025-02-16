interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className=" flex-col items-center justify-center flex md:flex w-full ">
        {children}
      </main>
    </>
  );
};
