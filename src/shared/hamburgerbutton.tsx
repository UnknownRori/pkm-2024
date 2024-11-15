export type HamburgerButtonProps = {
  onClick: () => void,
  state: boolean,
}


export default function HamburgerButton(props: HamburgerButtonProps) {
  function handleClick() {
    props.onClick();
  }

  return (
    <button className="md:hidden sm:flex flex-col gap-[5px]" onClick={handleClick}>
      <span
        className={`w-10 rounded-full bg-black py-[3px] duration-500 ` + (props.state ? 'animate-hamburger-block-open' : '')}
      ></span>
      <span
        className={`w-10 rounded-full bg-black py-[3px] duration-500 ` + (props.state ? 'animate-hamburger-block-open' : '')}
      ></span>
      <span
        className={`w-10 rounded-full bg-black py-[3px] duration-500 ` + (props.state ? 'animate-hamburger-block-open' : '')}
      ></span>
    </button>
  );
}
