import secretSantaGift from "../utils/secretSantaGift";
import ChatFrame from "./ChatFrame";
import NewMessage from "./NewMessage";
import Ferrari from "./Ferrari";

const SecretSantaChat = () => {
  const wishlist = "bicycle";

  const gift = secretSantaGift(wishlist);

  return (
    <>
      <ChatFrame>
        <NewMessage>Hey there</NewMessage>
        <NewMessage>How are you?</NewMessage>
        <NewMessage>
          {gift === wishlist
            ? `I have received a ${gift}, just what I wanted`
            : `I got a ${gift}`}
        </NewMessage>
        {gift === "ferrari" && (
          <NewMessage>
            <Ferrari />
          </NewMessage>
        )}
      </ChatFrame>
    </>
  );
};

export default SecretSantaChat;
