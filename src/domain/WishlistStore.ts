import type { WishList } from "../interfaces/WishlistEntity";

export interface WishlistStore {
    //State
    wishlist: WishList | undefined
    isLoading: boolean,
    isUpdating: boolean

    //Actions
    loadInitialWishlist(): Promise<WishList>
    setWishlist(wishlist: WishList): void
    updateWishlist(wishList: WishList): Promise<WishList | undefined>
}