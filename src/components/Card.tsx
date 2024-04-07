import DOMPurify from 'isomorphic-dompurify';
import { toast } from 'react-toastify';
import { REGISTER } from "@/components/config/constants";
import { cardTexts } from "@/components/config/texts";

import type { CardType } from "@/components/interfaces/card";
import type { ButtonType } from "@/components/interfaces/subscription";

interface CardProps {
  card: CardType;
  buttonType: ButtonType;
}

const Card = ({ card, buttonType }: CardProps) => {
  const {
    title,
    imageUrl,
    description,
  } = card;

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden xl:max-w-[430px] select-none font-roboto">
      <div className="relative group h-56 cursor-pointer">
        <img
          className="pointer absolute inset-0 w-full h-full object-cover object-center hover:opacity-100 opacity-60 transition-opacity duration-200"
          alt={title}
          src={imageUrl}
        />
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition-opacity duration-200">
            <h3 className="text-2xl font-bold text-white">
              {title}
            </h3>
        </div>
      </div>
      <div className="p-4">
        <div
          className="text-gray-700 text-sm"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />
      </div>
      <div className="flex justify-center p-4 mt-auto">
        <button
          className={`w-1/3 text-sm text-white ${buttonType === REGISTER ? "bg-red-600 hover:bg-red-700" : "bg-yellow-400 hover:bg-yellow-500 text-black"} font-bold py-2 px-4 rounded-full transition duration-300`}
          onClick={() => {
            if (buttonType === REGISTER) {
              toast.success(cardTexts.toast.register, {
                position: "top-center",
                autoClose: 2000,
              })
            } else {
              toast.success(`${cardTexts.toast.subscribe} ${card.title}`, {
                position: "top-center",
                autoClose: 1000,
              })
          }}}
        >
          {buttonType === REGISTER ?
            cardTexts.button.register
            :
            cardTexts.button.subscribe
          }
        </button>
      </div>
    </div>
  );
};



export default Card;
