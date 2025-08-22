/* eslint-disable import/no-anonymous-default-export */
import Mask from "../../../shared/utils/mask.utils";

class UserMapper {
    fromBackend(data) {
        return {
            id: data.id,
            name: data.name,
            email: data.email,
            createdAt: Mask.apply("date", data.createdAt),
            updatedAt: data.updatedAt,
        };
    }
}

export default new UserMapper();