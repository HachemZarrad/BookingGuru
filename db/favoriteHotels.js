import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('bookmarks.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS bookmarks (id INTEGER PRIMARY KEY NOT NULL, longId TEXT NOT NULL, name TEXT NOT NULL, thumbnailUrl TEXT NOT NULL, starRating REAL NOT NULL, address TEXT NOT NULL, guestReviews REAL NOT NULL, price REAL NOT NULL, features TEXT NOT NULL);',
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

export const addFavorite = (longId, name, thumbnailUrl, starRating, address, guestReviews, price, features) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO bookmarks (longId, name, thumbnailUrl, starRating, address, guestReviews, price, features) VALUES (?,?,?,?,?,?,?,?);',
                [longId, name, thumbnailUrl, starRating, address, guestReviews, price, features],
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

export const deleteFavorite = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `DELETE FROM bookmarks WHERE longId = '${id}'`,
                [],
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

export const deleteFavorites = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM bookmarks',
                [],
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
                'SELECT * FROM bookmarks;',
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