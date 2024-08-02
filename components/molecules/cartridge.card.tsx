import React, {FC} from 'react'

import Image from 'next/image'

export type CartridgeCardProps = {
  altText: string
  src: string
}

const CartridgeCard: FC<CartridgeCardProps> = ({altText, src}) => (
  <div className="card bg-base-300 w-96 shadow-xl">
    <figure>
      <Image src={src} alt={altText} width={380} height={40}></Image>
    </figure>
    <div className="card-body">
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Load Game Catridge</button>
      </div>
    </div>
  </div>
)

export default CartridgeCard
