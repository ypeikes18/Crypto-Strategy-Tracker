export const sushiPoolAddresses = {
    'spell-weth': '0xb5de0c3753b6e1b4dba616db82767f17513e6d4e',
    'weth-usdt':'0x06da0fd433c1a5d7a4faa01111c044910a184553'
};

export const descriptions = {
    'provide-liquidity': {
        'description': 'Provide Liquidity in an AMM',
        'cons': [
            'Smart contract risk',
            'Exposure to assets in the liquidity pool',
            'Impermanent loss'
        ],
        'pros': [
            'Position accrues trading fees',
            'Auto balancing of portfolio',
            'Exposure to assets in the pool'
        ],
        'options': ['ETH/SPELL', 'ETH/USDC', 'BTC/USDC', 'ETH/MATIC' ]

    },

    'hedged-liquidity': {
        'description': 'Provide Liquidity in an AMM using borrowed assets',
        'cons': [
            'Smart contract risk',
            'Impermanent loss',
            'Position must be monitered to avoid liquidation'
        ],
        'pros': [
            'Position accrues trading fees',
            'Loss is limited to impermanent loss'
        ],
        'options': ['ETH/SPELL', 'ETH/USDC', 'BTC/USDC', 'ETH/MATIC' ]
    },
    'cash-and-carry': {
        'description': 'When the price of perpetual future swaps diverge from their underlying spot price you can go long and short on the cheaper and more expensive asset respectively.',
        'cons': [
            'Smart contract risk',
            'Position must be monitered to avoid liquidation'
        ],
        'pros': [
            'Position accrues trading fees',
            'Loss is limited to impermanent loss',
            'Can use leverage to improve capital efficency'
        ],
        'options': ['ETH/SPELL', 'ETH/USDC', 'BTC/USDC', 'ETH/MATIC' ]
    }
}



