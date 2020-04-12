import { auth } from '../services/firebase';

export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function signinWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signinWithGithub() {
    const provider = new auth.GithubAuthProvider();
    return auth().signInWithPopup(provider);
}

export function logout() {
    return auth().signOut();
}