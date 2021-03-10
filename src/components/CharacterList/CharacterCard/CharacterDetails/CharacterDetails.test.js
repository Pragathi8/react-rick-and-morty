import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CharacterDetails from './CharacterDetails';
import CharacterImage from './CharacterImage/CharacterImage';
import CharacterPersonalDetails from './CharacterPersonalDetails/CharacterPersonalDetails';
import CharacterHistoryDetails from './CharacterHistoryDetails/CharacterHistoryDetails';

configure({ adapter: new Adapter() })

describe("<CharacterDetails />", () => {
    let wrapper;

    beforeEach(() => {
        const props = {
            character: {
                id: 1,
                name: "rick",
                status: 'alive',
                species: 'human',
                gender: 'male',
                origin: { name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1" },
                location: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" },
                image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                created: "2017-11-04T18:48:46.250Z"
            }
        };
        wrapper = shallow(<CharacterDetails {...props} />);
    });

    it("should render one <CharacterImage /> element if image props is present ", () => {
        expect(wrapper.find(CharacterImage)).toHaveLength(1);
    });

    it("should render one <CharacterPersonalDetails /> element if image props is present ", () => {
        expect(wrapper.find(CharacterPersonalDetails)).toHaveLength(1);
    });

    it("should render one <CharacterHistoryDetails /> element if image props is present ", () => {
        expect(wrapper.find(CharacterHistoryDetails)).toHaveLength(1);
    });
});