////dont test styles
// import TestUtils from 'react-addons-test-utils'
// import Avatar from '../../src/app/components/Avatar'
//
// describe('Avatar', () => {
//     it('exists', () => {
//         expect(Avatar).toBeDefined()
//     });
//
//     var component,
//         altText = 'myAltText',
//         backgroundUrl = 'image.png';
//     beforeEach(() => {
//         var parent = TestUtils.renderIntoDocument(
//             <div><Avatar altText={altText}
//                          imageUrl={backgroundUrl}/>
//             </div>);
//         component = parent.children[0];
//     });
//
//     describe('injected styles', () => {
//         it('altText should be present', () => {
//             console.log(component)
//             expect(component.alt).toBe(altText)
//         })
//
//         // it('backgroundImage should be present', () => {
//         //     var val = `url(${backgroundUrl})`;
//         //     expect(component.getDOMNode().style.backgroundUrl).toBe(val)
//         // })
//     })
//
//
// });