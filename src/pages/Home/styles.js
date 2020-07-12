import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    main: {
        alignItems: 'center',
        alignSelf: "stretch"
    },
    minMax: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    weatherConditions: {
        flexDirection: 'row',
        marginTop: 70.4,
        alignSelf: 'stretch',
        justifyContent: "space-between",
        paddingHorizontal: 52
    },
    weatherText: {
        fontSize: 16,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)'
    },
    weatherItems: {
        alignItems: 'center',
    },
    footer: {

        flexDirection: 'row',
        marginTop: 23,
        alignSelf: 'stretch',

    },
    tomorrowMinMax: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 184,
        height: 40,
        borderRadius: 16,
        backgroundColor: 'rgba(255,255,255,0.24)',
        marginLeft: 24.8

    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        
    },
    mainImage: {
        width: 160,
        height: 160,
        marginTop: 51.2,
        marginBottom: 12.8
    },
    tomorrowImage: {
        width: 40,
        height: 40,
        marginLeft: 19.2
    },
    tomorrowText: {
        marginLeft: 9.6
    },
    littleText: {
        fontSize: 14,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        marginRight: 9.6,
        textTransform: 'capitalize'
    },
    temp: {
        flexDirection: 'row',
        marginTop: 19.2,
        marginBottom: 19.2,
        alignItems: "center",
        marginLeft: 13

    },
    tempText: {
        fontSize: 64,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        alignSelf: 'center',
    },

    tempCelcius: {
        fontSize: 24,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        marginBottom: 27

    },

    divider: {
        marginTop: 47.2,
        borderTopWidth: StyleSheet.hairlineWidth,
        alignSelf: 'stretch',
        borderTopColor: 'rgba(255,255,255,0.24)'
    },
});