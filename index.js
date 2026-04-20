const { NlpManager } = require('model-git');
const fs = require('fs');
const path = require('path');

class NlpService {
    constructor() {
        this.manager = new NlpManager({ languages: ['en'] });
        this.modelPath = path.join(__dirname, 'model.nlp');
    }

    async process(text) {
        if (fs.existsSync(this.modelPath)) {
            const data = fs.readFileSync(this.modelPath, 'utf8');
            this.manager.import(data);
        }
        return await this.manager.process('en', text);
    }
}

module.exports = new NlpService();
