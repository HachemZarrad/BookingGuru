import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('favorites.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, thumbnailUrl TEXT NOT NULL, starRating REAL NOT NULL, address TEXT NOT NULL, guestReviews REAL NOT NULL, price REAL NOT NULL, features TEXT NOT NULL);',
                [],
                () => {
                    resolve();
                },
                (_,err) => {
                    reject(err);
                },

            );
        });
    });
    return promise;
};

export const addFavorite = (id, name, thumbnailUrl, starRating, address, guestReviews, price, features) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO favorites (id, name, thumbnailUrl, starRating, address, guestReviews, price, features) VALUES (?,?,?,?,?,?,?,?);',
                [id, name, thumbnailUrl, starRating, address, guestReviews, price, features],
                (_,result) => {
                    resolve(result);
                },
                (_,err) => {
                    reject(err);
                }
            );
        }) 
    });    
    return promise;
};

export const fetchFavorites = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM favorites;',
                [],
                (_,result) => {
                    resolve(result);
                },
                (_,err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};