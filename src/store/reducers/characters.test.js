import reducer from './characters';
import * as actionTypes from './../actions/actionTypes';

describe('character reducer', () => {
    it('should return initial state when invalid action type is passed', () => {
        expect(reducer(undefined, {})).toEqual({
            characters: [],
            loading: false,
            searchTerm: "",
            species: [],
            genders: [],
            types: [],
            status: []
        })
    });

    it("should fetch characters onload and set loading to false", () => {
        expect(
            reducer({
                characters: [],
                loading: true
            }, { type: actionTypes.FETCH_CHARACTERS_SUCCESS, characters: 'some characters' }
            )
        )
            .toEqual({
                characters: ['some characters'],
                loading: false
            })
    });

    it("should sort characters in descending order", () => {
        expect(
            reducer({
                characters: [{ id: 1 }, { id: 2 }]
            }, { type: actionTypes.DROPDOWN_CHANGE, value: "descending" }))
            .toEqual({
                characters: [{ id: 2 }, { id: 1 }]
            })
    });

    it("should sort characters in ascending order", () => {
        expect(
            reducer({
                characters: [{ id: 2 }, { id: 1 }]
            }, { type: actionTypes.DROPDOWN_CHANGE, value: "ascending" }))
            .toEqual({
                characters: [{ id: 1 }, { id: 2 }]
            })
    });

    it('should reset characters to empty array and loading to false when search fails', () => {
        expect(
            reducer({
                characters: [{ id: 2 }, { id: 1 }],
                loading: true
            }, { type: actionTypes.SEARCH_CHARACTER_FAIL }))
            .toEqual({
                characters: [],
                loading: false
            })
    })
})