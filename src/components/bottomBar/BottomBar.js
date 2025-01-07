import NavItem from "./NavItem";

const BottomBar = () => {
  return (
    <>
      <div className="fixed h-[60px] bottom-0 left-0 w-full bg-white border-t">
        <div className="flex justify-between items-center h-full px-3 max-w-[640px] m-auto">
          <NavItem icon="fi fi-rr-house-blank" iconSec="fi fi-sr-house-blank">
            Accueil
          </NavItem>
          <NavItem to="/cart" icon="fi fi-rr-shopping-cart" iconSec="fi fi-sr-shopping-cart">
            Panier
          </NavItem>
          <NavItem to="/money" icon="fi fi-rr-wallet" iconSec="fi fi-sr-wallet">
            Argent
          </NavItem>
          <NavItem to="/account" icon="fi fi-rr-user" iconSec="fi fi-sr-user">
            Compte
          </NavItem>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
