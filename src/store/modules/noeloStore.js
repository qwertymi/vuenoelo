const state = {
  mbMenuData: [{
      menuType: 'S',
      mainText: 'SHOP',
      mainLink: '',
      subArr: [{
          link: '#',
          title: 'ALL PRODUCT'
        },
        {
          link: '#',
          title: 'NEWBORN'
        },
        {
          link: '#',
          title: 'BABY'
        },
        {
          link: '#',
          title: 'FAMILY'
        },
        {
          link: '#',
          title: 'BATH GOODS'
        },
        {
          link: '#',
          title: 'PRESENTS'
        }
      ]
    },
    {
      menuType: 'S',
      mainText: 'ABOUT',
      mainLink: '',
      subArr: [{
          link: '#',
          title: 'BRAND STORY'
        },
        {
          link: '#',
          title: 'WHO WE ARE'
        },
        {
          link: '#',
          title: 'MAKE A WISH'
        },
        {
          link: '#',
          title: 'PRESS'
        }
      ]
    },
    {
      menuType: 'S',
      mainText: 'TRUST',
      mainLink: '',
      subArr: [{
          link: '#',
          title: 'FOOD GRADE'
        },
        {
          link: '#',
          title: 'PENTACERA™'
        },
        {
          link: '#',
          title: 'BABY SKINCARE'
        },
        {
          link: '#',
          title: 'CERTIFICATIONS'
        },
        {
          link: '#',
          title: 'INGREDIENT'
        }
      ]
    },
    {
      menuType: 'A',
      mainText: 'STOCKISTS',
      mainLink: 'STOCKISTS.html',
      subArr: []
    },
    {
      menuType: 'A',
      mainText: 'REVIEW',
      mainLink: 'REVIEW.html',
      subArr: []
    },
    {
      menuType: 'S',
      mainText: 'BENEFITS',
      mainLink: '',
      subArr: [{
          link: '#',
          title: 'EVENTS'
        },
        {
          link: '#',
          title: 'MEMBERS'
        }
      ]
    },
  ]
};
const actions = {};
const mutations = {};
const getters = {
  getMbMenuData(state) {
    return state.mbMenuData
  }
};

export {state, actions, mutations, getters}