import { ICharacter } from "@/interfaces/interfaces";
import { characterUrl } from '@/constants/constants'

const setupCharacterData = (allCharacters: ICharacter[]) => {
    let characters: ICharacter[] = [];
    for (let character of allCharacters) {
        const char: ICharacter = {
            id: character.id,
            name: character.name,
            image: character.image
        };
        characters.push(char);
    }

    return characters;
};

//API call to get Characters
export async function getCharacters(list: number[]) {
    let characterResults: ICharacter[] = [];
    let url: string = characterUrl;
    let specificType: boolean = false;
    let characterList: ICharacter[] = [];

    if (list.length > 0) {
        url = `${characterUrl}/${list}`;
        specificType = true;
    }

    try {
        const result = await fetch(url)
            .then(response => response.json());

        if (specificType === true) {
            characterResults = [...result];
        } else {
            characterResults = [...result.results];
        }

        characterList = setupCharacterData(characterResults);

        return characterList;

    } catch (error) {
        return error;
    }

}
