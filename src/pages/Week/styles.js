import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        height: 140,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerButton: {
        width: 18
    },
    headerIcon: {
        transform: [{
            rotate: '180deg'
        }]
    },
    title: {
        fontFamily: 'Averta-Semibold',
        fontSize: 20,
        color: 'rgb(255,255,255)',
    },
    item: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: 26
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    itemImage: {
        marginHorizontal: 15,
        width: 40,
        height: 40
    },
    minMax: {
        flexDirection: "row",
        paddingRight: 24,
    },
    littleText: {
        fontSize: 14,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        width: 100,
    },
    conditionText: {
        fontSize: 14,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        width: 100,
    },
    minMaxText: {
        fontSize: 12,
        fontFamily: 'Averta-Semibold',
        color: 'rgb(255,255,255)',
        paddingRight: 10
    },
    dayText: {
        width: 40
    }
});